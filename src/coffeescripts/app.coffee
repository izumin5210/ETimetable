app = angular.module 'ETimetable', ['ngRoute']

app.constant 'config',
  apiEndpoint: 'http://0.0.0.0:9000/api/v1/'

app.config ($routeProvider, $locationProvider) ->
  # TODO:
  # ONにすると直接URL打たれた時とかreload時につらいことになる
  # ハッシュを使いたくなければ（= html5Modeをtrueにしたければ）バックエンド側で
  # 対応するURLにリクエストが来た場合はぜんぶこのViewを描画するように実装しないといけない
  # $locationProvider.html5Mode true

  $routeProvider
    .when '/grades',
      templateUrl: '/templates/grades.html'
      controller: 'GradesCtrl'
    .when '/:grade/departments',
      templateUrl: '/templates/departments.html'
      controller: 'DepartmentsCtrl'
    .when '/:grade/:department/courses',
      templateUrl: '/templates/courses.html'
      controller: 'CoursesCtrl'
    .when '/:grade/:department/timetables',
      templateUrl: '/templates/timetables.html'
      controller: 'TimetablesCtrl'
    .when '/:grade/:department/:course/timetables',
      templateUrl: '/templates/timetables.html'
      controller: 'TimetablesCtrl'
    .when '/:grade/:department/:course/timetables/:id',
      templateUrl: '/templates/lectures.html'
      controller: 'LecturesCtrl'
    .otherwise
      redirectTo: '/grades'
