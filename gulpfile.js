// TODO: minify
var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create()

gulp.task('default', function() {
  gulp.watch('./app/**/*').on('change', browserSync.reload);
  
  browserSync.init({
    server: './app'
  });
});