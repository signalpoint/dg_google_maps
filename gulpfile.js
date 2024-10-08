var makeBinary = true;

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

var jsSrc = [
  './src/_dg_google_maps.js',
  './src/includes/include.*.js'
];

// Minify JavaScript
function minifyJs() {
  console.log('compressing dg_google_maps.js...');
  var js = gulp.src(jsSrc)
    .pipe(gp_concat('dg_google_maps.js'))
    .pipe(gulp.dest('./'));
  if (makeBinary) {
    console.log('compressing dg_google_maps.min.js...');
    return js.pipe(gp_rename('dg_google_maps.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('./'));
  }
  return js;
}
gulp.task(minifyJs);

gulp.task('default', function(done) {

  gulp.watch(jsSrc, gulp.series('minifyJs'));

  done();

});
