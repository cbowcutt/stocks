var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('build', function() {
	gulp.src('src/js/client/script.js')
		.pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('public/js'));
})


//gulp.task('default', ['scripts']);