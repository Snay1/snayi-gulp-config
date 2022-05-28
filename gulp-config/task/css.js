const {src, dest} = require('gulp');

// Config

const path = require('../config/path.js');


// Plugins

const gulpPlumber = require('gulp-plumber');
const gulpNotify = require('gulp-notify');
const gulpConcat = require('gulp-concat');
const gulpCssImport = require('gulp-cssimport');
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpCssO = require('gulp-csso');
const gulpRename = require('gulp-rename');
const gulpSize = require('gulp-size');
const gulpShorthand = require('gulp-shorthand');
const gulGroupCssMediaQueries = require('gulp-group-css-media-queries');
const gulpWebPCss = require('gulp-webp-css');
const gulpWebpCss = require('gulp-webp-css');
const app = require('../config/app.js');


const css = () => {
    return src(path.css.src, {sourcemaps: app.isDev})
        .pipe(gulpPlumber({
            errorHandler: gulpNotify.onError(error => ({
                title: 'CSS',
                message: error.message
            }))
        }))
        .pipe(gulpConcat('style.css'))
        .pipe(gulpCssImport())
        .pipe(gulpWebpCss())
        .pipe(gulpAutoprefixer())
        .pipe(gulpShorthand())
        .pipe(gulGroupCssMediaQueries())
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
        .pipe(gulpRename({suffix: ".min"}))
        .pipe(gulpSize({
            title: "Min CSS file"
        }))
        .pipe(gulpCssO())
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
        .pipe(gulpSize({
            title: "Normal CSS file"
        }))
}

module.exports = css;