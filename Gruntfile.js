module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    'gh-pages': {
      options: {
        base: 'config/Documentation/' ,
        message: 'Generated by grunt gh-pages'
      } ,
      src: ['**/*']
    },
    });
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask ('deploy', ['gh-pages']);
};