const request = require('request');
const requestPromise = require('request-promise');
const fs = require('fs');
const s3 = require('s3');

let client = s3.createClient({
    maxAsyncS3: 20,
    s3RetryCount: 3,
    s3RetryDelay: 1000,
    multipartUploadThreshold: 20971520,
    multipartUploadSize: 15728640,
    s3Options: {
        accessKeyId: "AKIAQ66MJL7IR2Z7UKH6",
        secretAccessKey: "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"
    },
});

let MongoClient = require('mongodb').MongoClient;
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

const maxProcessor = 5;

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
            processing.push(fetchCategoryTillEmpty(item));
        } else {
            if (processing.length > 0) {
                console.log('processing queue: ' + processing.length + ', queue left: ' + queue.length);
                await Promise.all(processing);
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
            processing = processing.filter(f => f.domain !== item.dom && f.language !== item.language);
            break;
        }
    }
}

async function fetchAndSaveHomeContent(qs) {
    console.log(qs);

    return await fetchHomeContent(qs)
        .then(async results => {
            if (results.length > 0) {
                await insertContents(results);

                for (let i = 0; i < results.length; i++) {
                    await downloadContentMedia(results[i]);
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
        .catch((err) => {
            if (err.name !== 'BulkWriteError' && err.code !== 11000) {
                console.error(err);
            }
        })
}

async function downloadContentMedia(content) {
    if (content.detail && content.detail.results) {
        const mediaList = content.detail.results;
        for (let i = 0; i < mediaList.length; i++) {
            const mediaSrc = mediaList[i].media.src;
            await downloadMedia(mediaSrc).catch(err => {
                console.log(`download media failed ${mediaSrc}`)
            });
        }
    } else {
        console.log('content do not have detail');
    }
}

function downloadMedia(uri) {
    console.log(`download media ${uri}`);
    return new Promise((resolve, reject) => {
        const fileName = getFileNameFromUrl(uri);

        request({
            uri
        }).pipe(fs.createWriteStream(mediaPath + fileName)).on('close', () => {
            client.uploadFile({
                localFile: mediaPath + fileName,

                s3Params: {
                    Bucket: 'awesome-storage',
                    Key: fileName
                },
            }).on('error', (err) => {
                console.error("unable to upload:", err.stack);
                reject(err);
            }).on('end', () => {
                console.log("done uploading");
                fs.unlinkSync(mediaPath + fileName);
                resolve();
            });
        }).on('error', (err) => {
            reject(err);
        })
    });
}

function getFileNameFromUrl(url) {
    return url.split('/').pop().replace(/[\#\?].*$/, '');
}