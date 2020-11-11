const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create();

gulp.task("sass-to-css", function () {
    return gulp
        .src("src/styles/**/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("dist"));
});

gulp.task("sass-watch", function () {
    browserSync.init({
        server: "./"
    });
    gulp.watch("src/styles/**/*.sass", gulp.series(["sass-to-css"])).on('change', browserSync.reload);
});