const { src, dest, watch, parallel, series }= require('gulp');


const scss           = require('gulp-sass')(require('sass'));
const concat         = require('gulp-concat');
const autoPrefixer   = require('gulp-autoprefixer');
const uglify         = require('gulp-uglify');
const browserSync    = require('browser-sync').create();
const imagemin       = require('gulp-imagemin');
const nunjucksRender = require('gulp-nunjucks-render');
const rename         = require('gulp-rename')

function nunjucks() {
  return src('app/*.njk')
    .pipe(nunjucksRender())
    .pipe(dest('app'))
    .pipe(browserSync.stream())
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}

function styles() {
  return src('app/scss/*.scss')
  .pipe(scss({outputStyle:'compressed'}))
   
  .pipe(rename({
    suffix : '.min'
  }))
  .pipe(autoPrefixer({
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }))
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

function watching() {
  watch(['app/scss/*.scss'], styles);
  watch(['app/*.njk'], nunjucks);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload)
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'app/fancybox/jquery.fancybox.min.js',
    'app/rateyo/jquery.rateyo.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}
function images(){
  return src('app/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
	  imagemin.mozjpeg({quality: 75, progressive: true}),
	  imagemin.optipng({optimizationLevel: 5}),
	  imagemin.svgo({
		  plugins: [
			  {removeViewBox: true},
			            {cleanupIDs: false}
		  ]
	  })
  ]))
  .pipe(dest('dist/images'))
}

function minTimer(){
  return src('app/js/shop.js')
  .pipe(concat('shop.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.images = images;
exports.watching = watching;
exports.build = series(images, build);
exports.minTimer = minTimer;
exports.nunjucks = nunjucks;


exports.default = parallel( nunjucks,styles,scripts,browsersync,watching )
 