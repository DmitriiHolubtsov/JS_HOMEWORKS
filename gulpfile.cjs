'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Compile Sass into CSS
async function buildStyles() {
    const autoprefixerModule = await import('gulp-autoprefixer');
    const autoprefixer = autoprefixerModule.default;

    return gulp.src('./layout-project/scss/pages/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules'],
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest('./layout-project/build/styles'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./layout-project/build/styles'));
}

// Build JS
async function buildJS() {

    return gulp.src('./layout-project/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./layout-project/build/js'));
}

// Optimize images
async function optimizeImages() {
    const imageminModule = await import('gulp-imagemin');
    const imagemin = imageminModule.default;

    return gulp.src('./layout-project/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./layout-project/build/assets/images'));
}

// Copy index.html to build folder
function copyIndexHtml() {
    return gulp.src('./layout-project/index.html')
        .pipe(gulp.dest('./layout-project/build'));
}

// Watch for changes in source files
function watch() {
    gulp.watch('./layout-project/scss/**/*.scss', buildStyles);
    gulp.watch('./layout-project/js/**/*.js', buildJS);
    gulp.watch('./layout-project/assets/images/*', optimizeImages);
    gulp.watch('index.html', copyIndexHtml);
}

// Export tasks
exports.default = gulp.series(gulp.parallel(buildStyles, buildJS, optimizeImages, copyIndexHtml), watch);
exports.buildStyles = buildStyles;
exports.buildJS = buildJS;
exports.optimizeImages = optimizeImages;
exports.watch = watch;