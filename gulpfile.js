let gulp     = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    uglify   = require('gulp-uglify'),
    htmlmin  = require('gulp-htmlmin'),
    del      = require('del'),
    gcmq     = require('gulp-group-css-media-queries');
    imagemin = require('gulp-imagemin');
    concat   = require('gulp-concat'),
    webp = require('gulp-webp');
    rename   = require("gulp-rename");

gulp.task('dir', function () {
    return gulp.src('*.*', {read: false})
        .pipe(gulp.dest('./src'))
        .pipe(gulp.dest('./src/sass/blocks'))
        .pipe(gulp.dest('./src/css'))
        .pipe(gulp.dest('./src/js'))
        .pipe(gulp.dest('./src/fonts'))
        .pipe(gulp.dest('./src/js'))
        .pipe(gulp.dest('./src/libs'))
        .pipe(gulp.dest('./src/img'));
});

gulp.task('minify-css', () => {
    return gulp.src('./src/css/*.css')
        // .pipe(rename({suffix: ".min"}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-js', () => {
    return gulp.src('./src/js/*.js')
        // .pipe(rename({suffix: ".min"}))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('minify-html', () => {
    return gulp.src('./src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('move-fonts', () => {
    return gulp.src('./src/fonts/**/*')
        // .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./dist/fonts'));
  });

gulp.task('imagemin', () =>
  gulp.src('./src/img/**/*')
      .pipe(imagemin())
    //   .pipe(webp())
      .pipe(gulp.dest('dist/img'))
);

gulp.task('dist', gulp.parallel('minify-css', 'minify-js', 'minify-html', 'move-fonts', 'imagemin'), () => {
});

gulp.task('clean', () => {
    return del.sync('dist');
});
 
gulp.task('gcmq', function () {
    gulp.src('./src/style.css')
        .pipe(gcmq())
        .pipe(gulp.dest('dist'));
});
