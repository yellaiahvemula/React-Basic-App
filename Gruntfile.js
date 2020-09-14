module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      concat: {
        options: {
          // define a String to put between each file in the concatenated output.
          separator: ';'
        },
        dist: {
          // the files to concatenate
          src: ['src/**/*.js'],
          // the location of the resulting file
          dest: 'build/<%= pkg.name %>.js'
        }
      },
      uglify: {
        options: {          
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        dist: {
          files: {
            'build/<%= pkg.name %>.min.js': ['<%= concat.build.dest %>']
          }
        }
      },
      qunit: {
        files: ['test/**/*.html']
      },
      jshint: {
        // define the files to lint
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        // configure JSHint
        options: {
          esversion: 6,
          // more options here if you want to override JSHint defaults
          globals: {
            JQuery : true,
            console: true,
            module: true
          }
        }
      },
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'qunit']
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
  
   // this would be run by typing "grunt test" on the command line
grunt.registerTask('test', ['jshint', 'qunit']);

// the default task can be run just by typing "grunt" on the command line
grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  
  };