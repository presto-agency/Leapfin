import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import imageminWebp from 'imagemin-webp';

export const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(
        imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          interlaced: true,
          optimizationLevel: 6, //to 7
          plugins: [
            imageminWebp({quality: 50})
          ]
        })
    )
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())
}

export const imagesDesktop = () => {
  return app.gulp.src(app.path.src.imagesDesk)
    .pipe(app.plugins.newer(app.path.build.imagesDesk))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.imagesDesk))
    .pipe(app.gulp.src(app.path.src.imagesDesk))
    .pipe(app.plugins.newer(app.path.build.imagesDesk))
    .pipe(
        imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          interlaced: true,
          optimizationLevel: 2, //to 7
          plugins: [
            imageminWebp({quality: 90})
          ]
        })
    )
    .pipe(app.gulp.dest(app.path.build.imagesDesk))
    .pipe(app.plugins.browsersync.stream())
}