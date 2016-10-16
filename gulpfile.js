const gulp = require('gulp')
const pug = require('gulp-pug')
const watch = require('gulp-watch')
const connect = require('gulp-connect')

gulp.task('connect', () => {
  connect.server({
    port: 8080,
    livereload: true,
    root: 'public'
  })
})

gulp.task('views', () => {
  return gulp.src('views/**/*.pug')
  .pipe(pug({}))
  .pipe(gulp.dest('public'))
  .pipe(connect.reload())
})

gulp.task('css', () => {
  return gulp.src('css/**/*.css')
  .pipe(gulp.dest('public/css'))
  .pipe(connect.reload())
})

gulp.task('watch', () => {
  watch('views/**/*', () => {
    gulp.start('views');
  });
  watch('css/**/*', () => {
    gulp.start('css');
  });
})

gulp.task('default', ['views', 'css', 'connect', 'watch']);
