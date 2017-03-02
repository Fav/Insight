var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower',function(){
    return bower('./bower_components')
        .pipe(gulp.dest('app/lib/'));
});

gulp.task('copythird',function(){
	return gulp.src('./third/**/*')
		.pipe(gulp.dest('app/lib/'))
})

gulp.task('default',['bower','copythird'])
