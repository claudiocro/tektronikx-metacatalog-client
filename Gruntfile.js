module.exports = function (grunt) {
  'use strict';

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

  grunt.task.registerTask('foo', 'foo', function() {
    console.log('sadf');
  });

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
      grunt.task.run('release:'+type);
      done(type);
    });
  });
};
