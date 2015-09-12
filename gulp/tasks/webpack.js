// @file webpack.js
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');
// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('../webpack.config.js').getConfig(environment);


gulp.task('webpack', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglifyjs() : $.util.noop())
    .pipe(gulp.dest(config.js.dest))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload());
});
