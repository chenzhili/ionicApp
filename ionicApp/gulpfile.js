var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
  ionic_js:"./www/**/*.js"
};


gulp.task("ionic_js",function () {
  gulp.src(paths.ionic_js)
    .pipe(concat("release.js"))
    .pipe(gulp.dest("./project"));
});


gulp.task('watch',function() {
  gulp.watch(paths.ionic_js,["ionic_js"]);
});

