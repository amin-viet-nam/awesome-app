const request = require('request');
const requestPromise = require('request-promise');
const stream = require('stream');
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: "AKIAQ66MJL7IRQSJACOQ",
    secretAccessKey: "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"
});

const s3 = new AWS.S3({
    maxAsyncS3: 20,
    s3RetryCount: 3,
    s3RetryDelay: 1000,
    multipartUploadThreshold: 20971520,
    multipartUploadSize: 15728640
});

const s3BucketName = 'awesome-storage';
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

let awesomeDatabase;
const language = require('./category').map(m => (m.value));

const apps = ['OMG', 'QUEEN'];
const mediaPath = __dirname + '/media/';

const queue = apps.reduce(((rets, val) =>
        rets.concat(
            language.map(
                (m) => ({language: m, domain: val})
            )
        )
), []);

const maxProcessor = 7;

let processing = [];

MongoClient.connect(url, {useNewUrlParser: true})
    .then((client) => {
        awesomeDatabase = client.db('awesome');
        fetchTillEmpty();
    })
    .catch((err) => {
        throw err;
    });

async function fetchTillEmpty() {

    while (true) {
        if (queue.length === 0 && processing.length === 0) {
            console.log('finish fetch data');
            break;
        } else if (queue.length > 0 && processing.length < maxProcessor) {
            const item = queue.shift();
            console.log('push to queue', item);
            processing.push(item);
        } else {
            if (processing.length > 0) {
                console.log('processing queue: ' + processing.length + ', queue left: ' + queue.length);
                await Promise.all(processing.map(fetchCategoryTillEmpty));
            }
        }
    }
}

async function fetchCategoryTillEmpty(item) {
    const {language, domain} = item;
    let page = 0;

    while (true) {
        page++;

        console.log(`-- fetch category : ${language} - ${page} - ${domain} --`);
        const hasNext = await fetchAndSaveHomeContent({language, domain, page});

        if (!hasNext) {
            console.log(`-- stop fetch category : ${language} - ${page} - ${domain} --`);
            processing = processing.filter(f => f.domain !== item.domain && f.language !== item.language);
            break;
        }
    }
}

async function fetchAndSaveHomeContent(qs) {
    console.log(qs);

    return await fetchHomeContent(qs)
        .then(async results => {
            if (results.length > 0) {
                const insertedIds = await insertContents(results);

                const newContentList = results.filter(f => insertedIds.includes(f._id));

                for (let i = 0; i < newContentList.length; i++) {
                    await downloadContentMedia(newContentList[i]);
                }
                return true;
            }
            return false;
        })
}

function fetchHomeContent(qs) {
    return requestPromise({
        method: 'GET',
        uri: 'https://omg-server.herokuapp.com/api/content',
        qs,
        json: true,
        rejectUnauthorized: false
    }).then(results => (
            results.map(m => {
                let obj = Object.assign(m, {_id: m.id});
                // delete obj.id;
                return obj;
            })
        )
    );
}

function insertContents(contents) {
    return awesomeDatabase.collection('content')
        .insertMany(contents, {ordered: false})
        .then(result => {
            return Object.keys(result.insertedIds)
                .map(m => (result.insertedIds[m]));
        })
        .catch((err) => {
            if (err.name !== 'BulkWriteError' && err.code !== 11000) {
                console.error(err);
            } else {
                let errorIds;
                if (err.writeErrors !== undefined) {
                    errorIds = err.writeErrors.map(m => m.err.op._id);
                } else {
                    errorIds = err.result.result.writeErrors.map(m => m.err.op._id);
                }

                return contents
                    .filter(f => !errorIds.includes(f._id))
                    .map(m => m._id);
            }
        })
}

async function downloadContentMedia(content) {
    if (content.detail && content.detail.results) {
        const mediaList = content.detail.results;
        for (let i = 0; i < mediaList.length; i++) {
            const mediaSrc = mediaList[i].media.src;
            await downloadMedia(mediaSrc).catch(err => {
                console.error(err);
                console.error(`download media failed ${mediaSrc}`)
            });
        }
    } else {
        console.log('content do not have detail');
    }
}

async function downloadMedia(uri) {

    const fileName = getFileNameFromUrl(uri);

    if (fileName === false) {
        return null;
    }

    const bucketKey = `content/${fileName}`;

    return await checkBucketObjectExists(s3BucketName, bucketKey)
        .then(exists => {
            return new Promise((resolve, reject) => {
                if (exists) {
                    console.log(`bucket key has already exist ${bucketKey}`);
                    resolve();
                } else {

                    console.log(`streaming ${uri} to ${bucketKey}`);

                    request({
                        uri
                    }).pipe(uploadFromStream(bucketKey))
                        .on('error', (error) => {
                            console.error('streaming media failed', error);
                            reject(error);
                        })
                        .on('end', () => {
                            resolve();
                        });
                }
            })
        })
}

function uploadFromStream(bucketKey) {
    const pass = new stream.PassThrough();

    s3.upload({
        Bucket: s3BucketName,
        Key: bucketKey,
        Body: pass
    }, (error, data) => {
        if (error) {
            console.error("unable to upload:", error);
        } else {
            console.log(`upload s3 success ${bucketKey}`);
        }
    });

    return pass;
}

function checkBucketObjectExists(bucket, key) {
    return new Promise(async (resolve, reject) => {
        try {
            const headCode = await s3.headObject({
                Bucket: bucket,
                Key: key
            }).promise();
            resolve(true)
        } catch (headErr) {
            if (headErr.code === 'NotFound') {
                resolve(false)
            }
        }
        resolve(false);
    });

}

function getFileNameFromUrl(url) {
    try {
        const fileName = url.split('/').pop().replace(/[\#\?].*$/, '');
        return fileName;
    } catch (e) {
        console.error(e);
    }
    return false;
}