const {src, dest} = require('gulp');

// Config

const path = require('../config/path.js');
const app = require('../config/app.js');


// Plugins

const gulpPlumber = require('gulp-plumber');
const gulpNotify = require('gulp-notify');
const gulpNewer = require('gulp-newer');
const gulpFonter = require('gulp-fonter');
const gulpTTF2WOFF2 = require('gulp-ttf2woff2');



const fonts = () => {
    return src(path.fonts.src)
        .pipe(gulpPlumber({
            errorHandler: gulpNotify.onError(error => ({
                title: 'FONTS',
                message: error.message
            }))
        }))
        .pipe(gulpNewer(path.fonts.dest))
        .pipe(gulpFonter(app.fonter))
        .pipe(dest(path.fonts.dest))
        .pipe(gulpTTF2WOFF2())
        .pipe(dest(path.fonts.dest))

}

module.exports = fonts;