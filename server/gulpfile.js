var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function () {
	nodemon({
		script: './bin/www',
		ext: 'js',
		env: {
			PORT: 4200
		},
		ignore: ['./node_modules/**']
	})
	.on('restert', function () {
		console.log('Boop!');
	});
});
