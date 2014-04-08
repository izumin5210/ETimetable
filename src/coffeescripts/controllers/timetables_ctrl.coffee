app = angular.module 'ETimetable'

app.controller 'TimetablesCtrl',
  ($scope, $http, $routeParams, config) ->

    departmentIds = {m: 1, e: 2, c: 3, a: 4, adv: 5}
    courseIds = {d: 1, j: 2, me: 3, ac: 4}

    $scope.timetables = {}
    $scope.grade = $routeParams.grade
    $scope.department =
      abbr: $routeParams.grade
      id: departmentIds[$routeParams.department]
    $scope.course =
      abbr: $routeParams.course
      id: courseIds[$routeParams.course]

    params = angular.extend {}, {grade: $scope.grade, department: $scope.department.id, course: $scope.course.id}
    params = angular.extend params, config.defaultParams


    $http.jsonp "#{config.apiEndpoint}/timetables", {params: params}
      .success (data) ->
        angular.forEach data, (t) ->
          $scope.timetables[t.wday] = {} unless $scope.timetables[t.wday]?
          $scope.timetables[t.wday][t.period] = t

