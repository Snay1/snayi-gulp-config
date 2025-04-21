const {src, dest} = require('gulp');

// Config

const path = require('../config/path.js');
const app = require('../config/app.js');


// Plugins

const gulpPlumber = require('gulp-plumber');
const gulpNotify = require('gulp-notify');
const gulpNewer = require('gulp-newer');



const img = () => {
    return src(path.img.src)
        .pipe(gulpPlumber({
            errorHandler: gulpNotify.onError(error => ({
                title: 'IMG',
                message: error.message
            }))
        }))
        .pipe(gulpNewer(path.img.dest))
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(gulpNewer(path.img.dest))
        .pipe(dest(path.img.dest))

}

module.exports = img;