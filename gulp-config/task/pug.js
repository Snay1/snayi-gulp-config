const {src, dest} = require('gulp');

// Config

const path = require('../config/path.js');

const app = require('../config/app.js');

// Plugins

const gulpPlumber = require('gulp-plumber');
const gulpNotify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const gulpSize = require('gulp-size');
const gulpPug = require('gulp-pug');
const gulpWebPHtml = require('gulp-webp-html');

const pug = () => {
    return src(path.pug.src)
        .pipe(gulpPlumber({
            errorHandler: gulpNotify.onError(error => ({
                title: 'PUG',
                message: error.message
            }))
        }))
        .pipe(gulpPug(app.pug))
        .pipe(gulpWebPHtml())
        .pipe(dest(path.pug.dest))
}

module.exports = pug;