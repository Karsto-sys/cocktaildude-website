var gulp = require('gulp');
var superstatic = require('superstatic');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'public',
      middleware: [superstatic({stack: 'strict'})]
    }
  });
  gulp.watch('public/*.html').on('change', browserSync.reload);
});