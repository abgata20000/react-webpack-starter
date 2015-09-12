var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');

//Webサーバー
gulp.task('connect', function() {
  $.connect.server({
    root: config.dest,
    port: config.port,
    livereload: true
  });
});
