const { src, dest } = require('gulp');
const sass = require('gulp-sass');

function compileBootstrap() {
  return src('src/02_gulp_template/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/02_gulp_template/css'));
    
}

exports.default = compileBootstrap;