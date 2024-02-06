import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from "gulp-cssnano"

export default () => {
    return gulp.src("src/**/*.css")
    .pipe(
        cssnano()
    ).pipe(gulp.dest("dist/css/"))

};
