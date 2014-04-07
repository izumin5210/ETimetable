(function() {
  var app;

  app = angular.module('ETimetable');

  app.controller('TimetablesCtrl', function($scope, $http, $routeParams, config) {
    var courseIds, departmentIds, params;
    departmentIds = {
      m: 1,
      e: 2,
      c: 3,
      a: 4,
      adv: 5
    };
    courseIds = {
      d: 1,
      j: 2,
      me: 3,
      ac: 4
    };
    $scope.grade = $routeParams.grade;
    $scope.department = {
      abbr: $routeParams.grade,
      id: departmentIds[$routeParams.department]
    };
    $scope.course = {
      abbr: $routeParams.course,
      id: courseIds[$routeParams.course]
    };
    params = angular.extend({}, {
      grade: $scope.grade,
      department: $scope.department.id,
      course: $scope.course.id
    });
    params = angular.extend(params, config.defaultParams);
    return $http.jsonp("" + config.apiEndpoint + "/timetables", {
      params: params
    }).success(function(data) {
      return $scope.timetables = data;
    });
  });

}).call(this);
