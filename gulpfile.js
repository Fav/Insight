var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('default',function(){
    return bower('./bower_components')
        .pipe(gulp.dest('app/lib/'));
});
