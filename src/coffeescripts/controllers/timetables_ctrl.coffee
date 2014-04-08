app = angular.module 'ETimetable'

app.controller 'TimetablesCtrl',
  ($scope, $http, $routeParams, config) ->

    departmentIds = {m: 1, e: 2, c: 3, a: 4, adv: 5}
    courseIds = {d: 1, j: 2, me: 3, ac: 4}

    $scope.currentWday = Math.min(Math.max($routeParams.wday || new Date().getDay(), 0), 5)

    $scope.wdayJa = ['日', '月', '火', '水', '木', '金', '土']

    $scope.timetables = {}
    $scope.grade = $routeParams.grade
    $scope.department =
      abbr: $routeParams.department
      id: departmentIds[$routeParams.department]
    $scope.course =
      abbr: $routeParams.course
      id: courseIds[$routeParams.course]

    $scope.href = (wday) ->
      if $scope.course.abbr?
        "#/#{$scope.grade}/#{$scope.department.abbr}/#{$scope.course.abbr}/timetables/#{wday}"
      else
        "#/#{$scope.grade}/#{$scope.department.abbr}/timetables/#{wday}"

    if $scope.department.id == 5
      $scope.class_ = "#{$scope.grade}#{$scope.course.abbr}".toUpperCase()
    else if $scope.course.abbr?
      $scope.class_ = "#{$scope.grade}#{$scope.department.abbr}#{$scope.course.abbr}".toUpperCase()
    else
      $scope.class_ = "#{$scope.grade}#{$scope.department.abbr}".toUpperCase()

    params = angular.extend {}, {grade: $scope.grade, department: $scope.department.id, course: $scope.course.id}
    params = angular.extend params, config.defaultParams

    $http.jsonp "#{config.apiEndpoint}/timetables", {params: params}
      .success (data) ->
        angular.forEach data, (t) ->
          $scope.timetables[t.wday] = {} unless $scope.timetables[t.wday]?
          $scope.timetables[t.wday][t.period] = t

