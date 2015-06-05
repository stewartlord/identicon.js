//------------ user for publishing
gulp.task('bump-patch-version', function () {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(bump({type: "patch"}).on('error', gutil.log))
        .pipe(gulp.dest('./'));
});

gulp.task('commit-changes', function () {
    return gulp.src('.')
        .pipe(git.commit('Bumped version number'));
});

gulp.task('push-changes', function (cb) {
    git.push('origin', 'master', cb);
});

gulp.task('create-new-tag', function (cb) {
    var version = getPackageJsonVersion();
    git.tag(version, 'Created Tag for version: ' + version, function (error) {
        if (error) {
            return cb(error);
        }
        git.push('origin', 'master', {args: '--tags'}, cb);
    });

    function getPackageJsonVersion () {
        //We parse the json file instead of using require because require caches multiple calls so the version number won't be updated
        return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
    }
});

gulp.task('release', function (callback) {
    runSequence(
        'bump-patch-version',
        'commit-changes',
        'push-changes',
        'create-new-tag',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('RELEASE FINISHED SUCCESSFULLY');
            }
            callback(error);
        });
});