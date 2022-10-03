const { parallel, src, pipe, dest } = require('gulp');
const concat 						= require('gulp-concat');
const babel 						= require('gulp-babel');
const browserify 					= require('gulp-browserify');
const typescript 					= require('gulp-typescript');



function mergeTSX() {
	return 	src('src/js/**/*.tsx')
			.pipe(concat('main_min.tsx'));
}

function compileJavascript() {
	return 	mergeTSX()
			.pipe(typescript({
				jsx: 'preserve',
				downlevelIteration: true,
				moduleResolution: "node"
			}))
			.pipe(babel())
			.pipe(browserify({
	          insertGlobals: true,
	          debug: true
	        }))
			.pipe(concat('main_min.js'))
			.pipe(dest('dist/'));
}


function compileCSS() {
	return 	src('src/css/**/*.css')
			.pipe(concat('main_min.css'))
			.pipe(dest('dist/'));
}
function html() {
	return 	src('src/index.php')
			.pipe(concat('index.php'))
			.pipe(dest('dist/'));
}


exports.default = parallel(compileJavascript, compileCSS, html);