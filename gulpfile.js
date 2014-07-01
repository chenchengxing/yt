// npm install gulp gulp-uglify
var gulp   = require('gulp');
var bird = require('gulp-bird');

var birdConfig = require('./bird-config.json');


gulp.task('bird', function() {
  bird.start(birdConfig.servers, birdConfig.transRules);
});
