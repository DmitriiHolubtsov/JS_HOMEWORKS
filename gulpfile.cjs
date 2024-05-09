
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// Compile Sass into CSS
async function compileSass() {
    return gulp.src('./layout-project/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./layout-project/build/styles'))
        .pipe(browserSync.stream());
}

// Compile Pug into HTML
function compilePug() {
    return gulp.src('./layout-project/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./layout-project/build'))
        .pipe(browserSync.stream());
}

// Serve files from the build directory
function serve() {
    browserSync.init({
        server: './layout-project/build'
    });

    // Watch for changes in Sass and Pug files
    gulp.watch('./layout-project/scss/**/*.scss', compileSass);
    gulp.watch('./layout-project/*.pug', compilePug);
    gulp.watch('./layout-project/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./layout-project/assets/images/*').on('change', browserSync.reload);
}

// Development task
exports.development = gulp.series(gulp.parallel(compileSass, compilePug), serve);