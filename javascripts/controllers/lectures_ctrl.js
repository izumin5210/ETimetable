var app;

app = angular.module('ETimetable');

app.controller('LecturesCtrl', function($scope, $http, $routeParams, config) {
  return $http.jsonp("" + config.apiEndpoint + "/lectures/" + $routeParams.id, {
    params: config.defaultParams
  }).success(function(data) {
    var l;
    l = data.lecture;
    $scope.lecture = l;
    console.log(data.lecture);
    $scope.department = l.department;
    if (l.department.id === 5) {
      return $scope.class_ = ("" + l.grade + l.course.abbr).toUpperCase();
    } else if (l.course.abbr != null) {
      return $scope.class_ = ("" + l.grade + l.department.abbr + l.course.abbr).toUpperCase();
    } else {
      return $scope.class_ = ("" + l.grade + l.department.abbr).toUpperCase();
    }
  });
});
