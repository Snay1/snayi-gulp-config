const {src, dest} = require('gulp');

// Config

const path = require('../config/path.js');
const app = require('../config/app.js');


// Plugins

const gulpPlumber = require('gulp-plumber');
const gulpNotify = require('gulp-notify');
const gulpBabel = require('gulp-babel');
const webpackStream = require('webpack-stream');


const js = () => {
    return src(path.js.src, {sourcemaps: app.isDev})
        .pipe(gulpPlumber({
            errorHandler: gulpNotify.onError(error => ({
                title: 'JS',
                message: error.message
            }))
        }))
        .pipe(gulpBabel())
        .pipe(webpackStream(app.webpack))
        .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
}

module.exports = js;