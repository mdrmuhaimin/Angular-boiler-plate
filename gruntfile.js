(function() {
    'use strict';
    module.exports = function(grunt) {
        // Do grunt-related things in here
        grunt.initConfig({
            connect: {
                server: {
                    options: {
                        keepalive: true,
                        port: 9001,
                        base: '.'
                    }
                }
            },
            includeSource: {
                options: {
                    basePath: './',
                    baseUrl: ''
                },
                myTarget: {
                    files: {
                        'index.html': 'index.tpl.html'
                    }
                }
            }
        });
        grunt.loadNpmTasks('grunt-include-source');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.registerTask('serve', ['includeSource', 'connect']);
    };
})();