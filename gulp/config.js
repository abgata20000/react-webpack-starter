// @file config.js
var path = require('path');
var webpack = require('webpack')
var dest = './public';
var src = './src';
var relativeSrcPath = path.relative('.', src);


module.exports = {
  // 出力先の指定
  dest: dest,
  port: 3000,

  // jsのビルド設定
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },
  //
  copy: {
    src: [
      src + '/www/index.html'
    ],
    dest: dest
  },
  //
  stylus: {
    src: [  // もし外部のcssフレームワーク使うなら配列の先頭で読み込むと良い
      src + '/styl/**/!(_)*'  // ファイル名の先頭がアンスコはビルド対象外にする
    ],
    dest: dest + '/css/',
    output: 'app.css',  // 出力ファイル名
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: true
  },
  //
  watch: {
    js: relativeSrcPath + '/js/**',
    styl: relativeSrcPath + '/styl/**',
    www: relativeSrcPath + '/www/index.html'
  }
}
