module.exports = function (grunt) {
  'use strict';

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
};
