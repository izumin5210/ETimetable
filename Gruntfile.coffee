module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  config =
    app: '.'
    dist: 'dist'

  grunt.initConfig
    config: config
    coffee:
      options:
        bare: true
      compile:
        files: [
          expand: true
          cwd: '<%= config.app %>/src/coffeescripts'
          src: ['**/*.coffee']
          dest: '<%= config.app %>/javascripts'
          ext: '.js'
        ]
    compass:
      dist:
        options:
          sassDir: '<%= config.app %>/src/sass'
          cssDir: '<%= config.app %>/stylesheets'
          specify: 'src/sass/style.scss'
    ngtemplates:
      'ETimetable':
        cwd: '<%= config.app %>/src'
        src: 'templates/**.html'
        dest: '<%= config.app %>/javascripts/templates.js'
        options:
          htmlmin:
            removeComments: true
            collapseWhitespace: true
    clean: ['.tmp', '<%= config.dist %>/*', '!<%= config.dist %>/.git' ]
    copy:
      dist:
        files: [
          expand: true
          dest: '<%= config.dist %>'
          src: [
            '<%= config.app %>/index.html'
            '<%= config.app %>/images/**'
            '<%= config.app %>/vendor/**'
          ]
        ]
    uglify:
      options:
        mangle: false
    useminPrepare:
      html: '<%= config.dist %>/index.html'
      options:
        root: '<%= config.app %>'
        dest: '<%= config.dist %>'
    usemin:
      html: '<%= config.dist %>/index.html'
      options:
        dest: '<%= config.dist %>'
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
        files: '<%= config.app %>/src/sass/**/*.scss'
        tasks: ['compass']
      coffee:
        files: '<%= config.app %>/src/coffeescripts/**/*.coffee'
        tasks: ['coffee']
      ngtemplates:
        files: '<%= config.app %>/src/templates/**.html'
        tasks: ['ngtemplates']
    buildcontrol:
      options:
        dir: '<%= config.dist %>'
        commit: true
        push: true
        message: 'Build %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      pages:
        options:
          remote: 'git@github.com:izumin5210/ETimetable.git'
          branch: 'gh-pages'

  grunt.registerTask 'default', ['connect', 'watch']
  grunt.registerTask 'build', ['clean', 'copy:dist', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'usemin']
