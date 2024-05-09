'use strict';

const APP = 'layout-project';
let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');

async function buildStyles() {
    const autoprefixerModule = await import('gulp-autoprefixer');
    const autoprefixer = autoprefixerModule.default;

    return gulp.src(`./${APP}/scss/pages/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules'],
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(
            // Optional if you want to see not minified CSS file
            gulp.dest(`./${APP}/styles`)
        )
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(`./`))
        .pipe(gulp.dest(`./${APP}/styles`));
}

exports.buildStyles = buildStyles;

// Gulp Watch
exports.default = async function() {
    gulp.watch(`./${APP}/scss/**/*.scss`, gulp.series(buildStyles));
};