const pathSrc = './src';
const pathDest = './public';


module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },

    pug: {
        src: pathSrc + '/pug/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest
    },

    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css'
    },

    scss: {
        src: pathSrc + '/sass/*.{scss,sass}',
        watch: pathSrc + '/sass/**/*.{scss,sass}',
        dest: pathDest + '/css'
    },
    
    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },

    img: {
        src: pathSrc + '/img/*.{jpeg,png,jpg,gif,svg}',
        watch: pathSrc + '/img/**/*.{jpeg,png,jpg,gif,svg}',
        dest: pathDest + '/img'
    },

    fonts: {
        src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/fonts'
    }
}