const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('rhaenyra/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({
      content: ['*.html', 'showcase/*.html']
    }))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['rhaenyra/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)