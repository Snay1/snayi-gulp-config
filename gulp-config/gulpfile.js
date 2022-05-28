const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();


// Config

const path = require('./config/path.js');
const app = require('./config/app.js');


// Tasks

const clear = require('./task/clear.js');
const pug = require('./task/pug.js');
const html = require('./task/html.js')
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const fonts = require('./task/fonts.js');

// Server

const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}


// Watching

const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.fonts.watch, fonts).on('all', browserSync.reload);
}

const build = series(
    clear,
    parallel(html, scss, js, img, fonts),
)


const dev = series(
    build,
    parallel(watcher, server)
);


// Tasks

exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;

exports.watcher = watcher;

exports.default = app.isProd ? build : dev;
