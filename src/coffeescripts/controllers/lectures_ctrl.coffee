app = angular.module 'ETimetable'

app.controller 'LecturesCtrl',
  ($scope, $http, $routeParams, config) ->

    $scope.isLoading = true

    $http.jsonp "#{config.apiEndpoint}/lectures/#{$routeParams.id}", {params: config.defaultParams}
      .success (data) ->
        l = data.lecture
        $scope.lecture = l
        $scope.department = l.department
        if l.department.id == 5
          $scope.class_ = "#{l.grade}#{l.course.abbr}".toUpperCase()
        else if l.course.abbr?
          $scope.class_ = "#{l.grade}#{l.department.abbr}#{l.course.abbr}".toUpperCase()
        else
          $scope.class_ = "#{l.grade}#{l.department.abbr}".toUpperCase()
        $scope.isLoading = false
