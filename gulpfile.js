const { src, dest, watch,   series } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

const watchHtmlGulpTemplate = watch(['src/02_gulp_template/*.html']);
const watchScssGulpTemplate = watch(['src/02_gulp_template/scss/*.scss']);

watchScssGulpTemplate.on('change', function(path, stats) {
  console.log(`SASS File ${path} was changed`);
  compileBootstrap();
  reloadBrowserSync();
});
watchHtmlGulpTemplate.on('change', function(path, stats) {
  console.log(`HTML File ${path} was changed`);
  reloadBrowserSync();
});

function reloadBrowserSync() {
  console.log(` >reload browseSync..`);
  browserSync.reload();
}

function compileBootstrap() {
  console.log(' >complie sass bootrsrap to `src/02_gulp_template/css` ')  
  return src('src/02_gulp_template/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/02_gulp_template/css'));
    
}

function rserve(cb) {

  console.log(' >run browseSync ')
  browserSync({
    server: 'src/02_gulp_template'
  });

  return cb();
};

exports.rserve = rserve;

exports.default = series(compileBootstrap,rserve); 