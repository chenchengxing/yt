// npm install gulp gulp-uglify
var gulp = require('gulp')
clean = require('gulp-clean'),
replace = require('gulp-replace'),
merge = require('merge-stream');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var bird = require('gulp-bird');

var paths = {
  src: './src/',
  build: './build/',
  bin: '../resources/',
  vendor: './vendor/'
};

var birdConfig = require('./bird-config.json');

/**
 * lint config
 */
gulp.task('lint', function() {
  var opt = {
    // bitwise: false, //禁止位运算
    expr: true, //允许短路 a && b();
    curly: true,
    immed: true, //
    noarg: true, //禁止使用arguments.caller and arguments.callee
    sub: true, //允许使用 $scope['name'] ,而不仅仅$scope.name
    eqnull: true, //允许使用 == null
    trailing: true
    // eqeqeq: true, //允许使用== 和 !=
  };
  var stream = gulp.src(paths.src + 'app/**/*.js')
    .pipe(jshint(opt))
    .pipe(jshint.reporter(stylish))

  return stream;
});

gulp.task('build-clean', function() {
  var stream = gulp.src(paths.build + '*', {
      read: false
    })
    .pipe(clean());
  return stream;
});

gulp.task('build-copy-src', ['build-clean'], function() {
  return gulp.src(paths.src + '**')
    .pipe(gulp.dest(paths.build))
});
gulp.task('build-copy-vendor', ['build-clean'], function() {
  return gulp.src(paths.vendor + '**')
    .pipe(gulp.dest(paths.build + 'vendor'))
});

gulp.task('build-replace', ['build-copy'], function() {
  var regex = new RegExp('../../vendor', 'g'),
    replacement = '../vendor';

  var stream = gulp.src([paths.build + '/app/main.js'])
    .pipe(replace(/..\/..\/vendor/g, '../vendor'))
    .pipe(gulp.dest(paths.build + 'app/'));

  return stream;
});

gulp.task('build', ['build-clean', 'build-copy-src', 'build-copy-vendor']);
gulp.task('start', function() {
  bird.start(birdConfig.servers, birdConfig.transRules);
  gulp.watch('./src/app/**', ['lint', 'build']);
});