// @file copy.js
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config').copy;

gulp.task('copy', function () {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe($.connect.reload());;
});
