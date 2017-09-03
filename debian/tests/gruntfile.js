'use strict';
module.exports = function (grunt) {
        grunt.initConfig({
    babel: {
        
        dist: {
            files: {
                'app.js': 'app.js'
            }
        }
    }
});
	grunt.loadNpmTasks('grunt-babel','/usr/lib/nodejs');
        grunt.registerTask('default', ['babel']);
};
