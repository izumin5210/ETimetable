app = angular.module 'ETimetable'

app.controller 'TimetablesCtrl',
  ($scope, $http, $routeParams, $location, config, TimetablesService) ->

    departmentIds = {m: 1, e: 2, c: 3, a: 4, adv: 5}
    courseIds = {d: 1, j: 2, me: 3, ac: 4}

    $scope.currentWday = Math.min(Math.max($routeParams.wday || new Date().getDay(), 0), 5)

    $scope.wdayJa = ['日', '月', '火', '水', '木', '金', '土']

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

    TimetablesService.changeTab($scope.currentWday - 1)

    $http.jsonp "#{config.apiEndpoint}/timetables", {params: params}
      .success (data) ->
        $scope.timetable = new Timetable(data)

    $scope.onCellClicked = (ids) ->
      if typeof ids == 'number'
        $location.url "lectures/#{ids}"
      else
