/// <vs BeforeBuild='default' />
var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jscs = require("gulp-jscs");
var gulputil = require("gulp-util");
var stylish = require("jshint-stylish");

gulp.task("default", function () {
    log('Analyzing JS files with JSCS and JSHint');

    return gulp.src([
        './Scripts/Services/**/*.js/',
        './Scripts/ViewModels/**/*.js/'
    ])
    .pipe(jscs())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
    .pipe(jshint.reporter('fail'));
});

/////////////
function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                gulputil.log(gulputil.colors.blue(msg[item]));
            }
        }
    } else {
        gulputil.log(gulputil.colors.blue(msg));
    }
}