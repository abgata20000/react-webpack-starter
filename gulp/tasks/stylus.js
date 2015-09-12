// @file stylus.js
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = require('../config').stylus;

gulp.task('stylus', function () {
  gulp.src(config.src)
    .pipe($.plumber())              // エラー出ても止まらないようにする
    .pipe($.stylus())               // 実際コンパイルしてるのはここ
    .pipe($.concat(config.output))  // 1つのファイルに固める
    .pipe($.autoprefixer(config.autoprefixer))  // vendor-prefixつける
    .pipe($.if(config.minify, $.minifyCss()))    // 必要ならminifyする
    .pipe(gulp.dest(config.dest))   // 出力する
    .pipe($.connect.reload());
});
