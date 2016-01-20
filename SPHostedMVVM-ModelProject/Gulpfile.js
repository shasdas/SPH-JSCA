/// <vs BeforeBuild='default' />
var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jscs = require("gulp-jscs");
var gulputil = require("gulp-util");
var stylish = require("jshint-stylish");
var fail = require("gulp-fail");
var gulpIf = require("gulp-if");
var jscsStylish = require('gulp-jscs-stylish');

gulp.task("default", function() {
    log('Analyzing JS files with JSCS and JSHint');

    return gulp.src([
        './Scripts/Services/**/*.js/',
        './Scripts/ViewModels/**/*.js/'
    ])
    .pipe(jshint('.jshintrc'))
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'))
    //.on('error', function () { })
    //.pipe(jscsStylish.combineWithHintResults())
    //.pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
    .pipe(jshint.reporter('fail'));
    //.pipe(gulpIf(function (file) {
    //    return (file.jscs.errorCount > 0);
    //}, fail("JSCS exited with errors!", true)));
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