/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const javascriptObfuscator = require('gulp-javascript-obfuscator-fixed');

module.exports = function (gulp, config, commandLineArguments) {
    /*
          * `gulp make`
          *  Cleans the output folder and copies the files for the specified
          *  project into it, together with common files
          *
          */
    gulp.task('make', ['common'], function () {
        const projectFolder = 'omg';

        gulp.src([`${projectFolder}/**/*`, `!${projectFolder}/**/js/*`], {base: projectFolder})
            .pipe(gulp.dest(config.outputFolder));

        return gulp.src(`${projectFolder}/**/js/*`, {base: projectFolder})
            .pipe(javascriptObfuscator({
                compact: true
            }))
            .pipe(gulp.dest(config.outputFolder));
    });
};
