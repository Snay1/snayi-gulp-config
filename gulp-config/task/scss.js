const {src, dest} = require('gulp');

// Config

const path = require('../config/path.js');


// Plugins

const gulpPlumber = require('gulp-plumber');
const gulpNotify = require('gulp-notify');
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpConcat = require('gulp-concat');
const gulpCssO = require('gulp-csso');
const gulpRename = require('gulp-rename');
const gulpSize = require('gulp-size');
const gulpShorthand = require('gulp-shorthand');
const gulGroupCssMediaQueries = require('gulp-group-css-media-queries');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpSassGlob = require('gulp-sass-glob');
const gulpWebPCss = require('gulp-webp-css');
const app = require('../config/app.js');


const scss = () => {
    return src(path.scss.src, {sourcemaps: app.isDev})
        .pipe(gulpPlumber({
            errorHandler: gulpNotify.onError(error => ({
                title: 'SCSS',
                message: error.message
            }))
        }))
        .pipe(gulpConcat('style.css'))
        .pipe(gulpSassGlob())
        .pipe(gulpSass())
        .pipe(gulpWebPCss())
        .pipe(gulpAutoprefixer())
        .pipe(gulpShorthand())
        .pipe(gulGroupCssMediaQueries())
        .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
        .pipe(gulpRename({suffix: ".min"}))
        .pipe(gulpSize({
            title: "Min SCSS file"
        }))
        .pipe(gulpCssO())
        .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
        .pipe(gulpSize({
            title: "Normal SCSS file"
        }))
}

module.exports = scss;