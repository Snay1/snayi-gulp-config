const {src, dest} = require('gulp');

// Config

const path = require('../config/path.js');
const app = require('../config/app.js');


// Plugins

const gulpPlumber = require('gulp-plumber');
const gulpNotify = require('gulp-notify');
const gulpImageMin = require('gulp-imagemin');
const gulpNewer = require('gulp-newer');
const gulpWebP = require('gulp-webp');
const gulpIf = require('gulp-if');



const img = () => {
    return src(path.img.src)
        .pipe(gulpPlumber({
            errorHandler: gulpNotify.onError(error => ({
                title: 'IMG',
                message: error.message
            }))
        }))
        .pipe(gulpNewer(path.img.dest))
        .pipe(gulpWebP())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(gulpNewer(path.img.dest))
        .pipe(gulpIf(app.isProd, gulpImageMin(app.imageMin)))
        .pipe(dest(path.img.dest))

}

module.exports = img;