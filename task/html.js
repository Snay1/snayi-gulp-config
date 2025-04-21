const {src, dest} = require('gulp');


// Config

const path = require('../config/path.js');
const app = require('../config/app.js')


// Plugins

const gulpPlumber = require('gulp-plumber');
const gulpNotify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const gulpSize = require('gulp-size');
const gulpWebPHtml = require('gulp-webp-html');

const html = () => {
    return src(path.html.src)
        .pipe(gulpPlumber({
            errorHandler: gulpNotify.onError(error => ({
                title: 'HTML',
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        // .pipe(gulpWebPHtml())
        .pipe(gulpSize({
            title: "Before"
        }))
        // .pipe(htmlMin(app.htmlMin))
        .pipe(gulpSize({
            title: "After"
        }))
        .pipe(dest(path.html.dest));
}

module.exports = html;