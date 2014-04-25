app = angular.module 'ETimetable'

app.controller 'TimetablesCtrl',
  ($scope, $http, $routeParams, $location, config, TimetablesService) ->

    $scope.isLoading = true

    departmentIds = {m: 1, e: 2, c: 3, a: 4, adv: 5}
    courseIds = {d: 1, j: 2, me: 3, ac: 4}

    $scope.currentWday = Math.min(Math.max($routeParams.wday || new Date().getDay(), 1), 5)

    $scope.wdayJa = ['日', '月', '火', '水', '木', '金', '土']

    $scope.grade = $routeParams.grade
    $scope.department =
      abbr: $routeParams.department
      id: departmentIds[$routeParams.department]
    $scope.course =
      abbr: $routeParams.course
      id: courseIds[$routeParams.course]

    if $scope.course.abbr?
      $scope.pageBack =
        label: 'コースを選択'
        href: "#/#{$scope.grade}/#{$scope.department.abbr}/courses"
    else
      $scope.pageBack =
        label: '学科を選択'
        href: "#/#{$scope.grade}/departments"

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

    if TimetablesService.cache[$scope.class_]?
      $scope.timetable = TimetablesService.cache[$scope.class_]
      $scope.isLoading = false
    else
      $http.jsonp "#{config.apiEndpoint}/timetables", {params: params}
        .success (data) ->
          TimetablesService.cache[$scope.class_] = $scope.timetable = new Timetable(data)
          $scope.isLoading = false

    $scope.onCellClicked = (cell) ->
      if typeof cell.ids() == 'number'
        $location.url "lectures/#{cell.ids()}"
      else
        cell.active = true

    $scope.onModalSelected = (cell, lecture) ->
      $location.url "lectures/#{lecture.lectureId}"
      cell.active = false

    $scope.modalDismiss = (cell) ->
      cell.active = false

