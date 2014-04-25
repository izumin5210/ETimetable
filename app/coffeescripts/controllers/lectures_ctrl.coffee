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
          $scope.pageBack =
            label: '時間割'
            href: "#/#{l.grade}/adv/#{l.course.abbr}/timetables"
        else if l.course.abbr?
          $scope.class_ = "#{l.grade}#{l.department.abbr}#{l.course.abbr}".toUpperCase()
          $scope.pageBack =
            label: '時間割'
            href: "#/#{l.grade}/#{l.department.abbr}/#{l.course.abbr}/timetables"
        else
          $scope.class_ = "#{l.grade}#{l.department.abbr}".toUpperCase()
          $scope.pageBack =
            label: '時間割'
            href: "#/#{l.grade}/#{l.department.abbr}/timetables"
        $scope.isLoading = false
