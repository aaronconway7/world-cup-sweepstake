var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var sass            = require('gulp-sass');
var jade            = require('gulp-jade');
var reload          = browserSync.reload;
var uglify          = require('gulp-uglify');
var prefix          = require('gulp-autoprefixer');
var cssnano         = require('gulp-cssnano');
var rename          = require('gulp-rename');
var runSequence     = require('run-sequence');
var concat          = require('gulp-concat');

gulp.task('sass', function(){
    return gulp.src('app/sass/*.sass')
        .pipe(sass()) // Using gulp-sass
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('jade', function() {
    return gulp.src('app/components/jade/*.jade')
        .pipe(jade({
            pretty: true
        })) // pipe to jade plugin
        .pipe(gulp.dest('app/components')) // tell gulp our output folder
});

gulp.task('scripts', function() {
    return gulp.src('app/js/components/*.js')
        .pipe(concat('eden.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('compile', function(){
    gulp.src('app/css/eden.css')
        .pipe(gulp.dest('dist/css'))

    gulp.src('app/css/eden.css')
        .pipe(cssnano())
        .pipe(rename("eden.min.css"))
        .pipe(gulp.dest('dist/css'))

    gulp.src('app/js/eden.js')
        .pipe(gulp.dest('dist/js'))

    gulp.src('app/js/eden.js')
        .pipe(uglify())
        .pipe(rename("eden.min.js"))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('jade-watch', ['jade'], reload);

gulp.task('jquery-watch', ['scripts'], reload);

gulp.task('watch', ['sass', 'jade'], function (){
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/components/jade/*.jade', ['jade-watch']);
    gulp.watch('app/js/**/*.js', ['jquery-watch']);
    // Other watchers
});

gulp.task('live', ['browserSync', 'sass', 'jade', 'scripts'], function (){
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/components/jade/*.jade', ['jade-watch']);
    gulp.watch('app/js/**/*.js', ['jquery-watch']);
    // Other watchers
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('default', function () {
    runSequence(
        ['jade', 'sass', 'scripts'],
        'compile',
        'live'
    )
});
