module.exports = function (grunt) {
  'use strict';

  var cp = require('child_process');
  var git = require('conventional-changelog/lib/git');
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Conventional Changelog
    changelog: { },

    release: {
      options: {
        tagName: 'v<%= version %>',
        additionalFiles: ['bower.json'],
        beforeRelease: ['changelog'],
        npm: false,
        // Workaround to not actually update the changelog but git stage it
        changelog: true,
        changelogText: ''
      }
    }
  });


  var getCommits = function(cb) {

console.log(git);
    git.getLatestTag(function(err, from) {
      console.log('from', from);
      var range = (from ? from + '..' : '') + 'HEAD';

      cp.exec(
        'git log -E --format=%H==SPLIT==%B==END== '+range,
        function(err, stdout) {
          if (err) {return cb(err);}

          cb(null, String(stdout).split('==END==\n')

          .filter(function(raw) {return !!raw.trim();})

          .map(function(raw) {
            var data = raw.split('==SPLIT==');
            return {
              hash: data[0],
              message: data[1]
            };
          }));
        }
      );
    });
  };

  grunt.task.registerTask('semantic-release', 'Do a semantic relase on travis', function() {
    var done = this.async();

    var type = null;
    git.getCommits({log:console.log},function(err, commits) {
      commits.every(function(commit) {
        if (commit.breaks.length) {
          type = 'major';
          return false;
        }

        if (commit.type === 'feat') {type = 'minor';}

        if (!type && commit.type === 'fix') {type = 'patch';}

        return true;
      });

      console.log('Release Type', type);
      done(type);
    });

    // getCommits(function(err, commits) {
    //   commits.map(function(commit){
    //    return git.parseRawCommit(commit.hash+'\n'+commit.message);
    //   })

    //   .filter(function(commit) { return!!commit;})

    //   .every(function(commit) {
    //     if (commit.breaks.length) {
    //       type = 'major';
    //       return false;
    //     }

    //     if (commit.type === 'feat') {type = 'minor'};

    //     if (!type && commit.type === 'fix') {type = 'patch'};

    //     return true;
    //   });

    //   done(type);
    //   console.log('type', type);
    // });
    //cb(null, type)

  });
};
