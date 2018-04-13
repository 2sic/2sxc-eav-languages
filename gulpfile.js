(() => {
  var gulp = require('gulp'),
    finalDest = './../2sxc-dnn742/Website' + '/DesktopModules/ToSIC_SexyContent/dist';


  // deploy to the current 2sxc-dev
  gulp.task('copy-dist-to-2sxc', function () {
    gulp.src(['./dist/**/*'])
      .pipe(gulp.dest(finalDest));
  });

  gulp.task('watch-dist', function () {
    gulp.watch('./dist/**/*', ['copy-dist-to-2sxc']);
  });


})();