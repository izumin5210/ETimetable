module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  config =
    app: 'app'
    dist: 'dist'

  grunt.initConfig
    config: config
    coffee:
      options:
        bare: true
      compile:
        files: [
          expand: true
          cwd: '<%= config.app %>/coffeescripts'
          src: ['**/*.coffee']
          dest: '.tmp/javascripts'
          ext: '.js'
        ]
    compass:
      dist:
        options:
          sassDir: '<%= config.app %>/sass'
          cssDir: '.tmp/stylesheets'
          specify: '<%= config.app %>/sass/style.scss'
    ngtemplates:
      'ETimetable':
        cwd: '<%= config.app %>'
        src: 'templates/**.html'
        dest: '.tmp/javascripts/templates.js'
        options:
          usemin:
            'javascripts/app.min.js'
          htmlmin:
            collapseBooleanAttributes: true
            collapseWhitespace: true
            removeAttributeQuotes: true
            removeComments: true
            removeEmptyAttributes: true
            removeRedundantAttributes: true
            removeScriptTypeAttributes: true
            removeStyleLinkTypeAttributes: true
    clean: ['.tmp', '<%= config.dist %>/*', '!<%= config.dist %>/.git' ]
    copy:
      dist:
        files: [
          expand: true
          cwd: '<%= config.app %>'
          dest: '<%= config.dist %>'
          src: [
            'index.html'
            'images/**'
            'vendor/**'
          ]
        ]
    uglify:
      options:
        mangle: false
    htmlmin:
      dist:
        options:
          collapseBooleanAttributes: true
          collapseWhitespace: true
          removeAttributeQuotes: true
          removeCommentsFromCDATA: true
          removeEmptyAttributes: true
          removeOptionalTags: true
          removeRedundantAttributes: true
          useShortDoctype: true
        files: [
          expand: true
          cwd: '<%= config.dist %>'
          src: '{,*/}*.html'
          dest: '<%= config.dist %>'
        ]
    useminPrepare:
      html: '<%= config.dist %>/index.html'
      options:
        root: '.tmp'
        dest: '<%= config.dist %>'
    usemin:
      html: '<%= config.dist %>/index.html'
      options:
        root: '.tmp'
        dest: '<%= config.dist %>'
    connect:
      livereload:
        options:
          middleware: (connect) ->
            [
              connect.static '.tmp'
              connect.static config.app
            ]
          port:9000
    watch:
      options:
        livereload: true
        spawn: true
      html:
        files: '**/*.html'
      compass:
        files: '<%= config.app %>/sass/**/*.scss'
        tasks: ['compass']
      coffee:
        files: '<%= config.app %>/coffeescripts/**/*.coffee'
        tasks: ['coffee']
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
  grunt.registerTask 'build', [
    'clean'
    'copy:dist'
    'useminPrepare'
    'ngtemplates'
    'coffee'
    'compass'
    'concat'
    'cssmin'
    'uglify'
    'usemin'
    'htmlmin'
  ]
