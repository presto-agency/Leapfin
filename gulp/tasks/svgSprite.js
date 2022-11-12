import spriteSvg from "gulp-svg-sprite"
import cheerio from "gulp-cheerio";

export const svgSprite = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(spriteSvg({
      mode: {
        stack: {
          sprite: "../icons/icons.svg",
          example: false
        }
      },
    }))
    .pipe(app.gulp.dest(`${app.path.build.images}`))
}