module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  grunt.initConfig
    coffee:
      compile:
        files: [
          expand: true
          cwd: 'src/coffeescripts'
          src: ['**/*.coffee']
          dest: 'javascripts'
          ext: '.js'
        ]
    compass:
      dist:
        options:
          config: 'config.rb'
    connect:
      livereload:
        options:
          port:9000
    watch:
      options:
        livereload: true
        spawn: true
      html:
        files: '**/*.html'
      compass:
        files: 'src/sass/**/*.scss'
        tasks: ['compass']
      coffee:
        files: 'src/coffeescripts/**/*.coffee'
        tasks: ['coffee']

  grunt.registerTask 'default', ['connect', 'watch']
