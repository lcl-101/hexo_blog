var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');

// css
gulp.task('minify-css', function() {
    return gulp.src('./themes/beantech/source/css/*.min.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./themes/beantech/source/css'));
});
