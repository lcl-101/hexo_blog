var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var rename = require("gulp-rename");

// css
gulp.task('minify-css', function() {
  return gulp.src('./themes/beantech/source/css/default/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./themes/beantech/source/css'));
});

// 压缩 js
gulp.task('minify-js', function() {
  return gulp.src('./themes/beantech/source/js/default/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./themes/beantech/source/js'));
});

// 执行 gulp 命令时执行的任务
gulp.task('default', [
  'minify-css',
  'minify-js'
]);
