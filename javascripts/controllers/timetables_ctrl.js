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
    $scope.wdayJa = ['日', '月', '火', '水', '木', '金', '土'];
    $scope.timetables = {};
    $scope.grade = $routeParams.grade;
    $scope.department = {
      abbr: $routeParams.department,
      id: departmentIds[$routeParams.department]
    };
    $scope.course = {
      abbr: $routeParams.course,
      id: courseIds[$routeParams.course]
    };
    if ($scope.department.id === 5) {
      $scope.class_ = ("" + $scope.grade + $scope.course.abbr).toUpperCase();
    } else {
      $scope.class_ = ("" + $scope.grade + $scope.department.abbr + $scope.course.abbr).toUpperCase();
    }
    params = angular.extend({}, {
      grade: $scope.grade,
      department: $scope.department.id,
      course: $scope.course.id
    });
    params = angular.extend(params, config.defaultParams);
    return $http.jsonp("" + config.apiEndpoint + "/timetables", {
      params: params
    }).success(function(data) {
      return angular.forEach(data, function(t) {
        if ($scope.timetables[t.wday] == null) {
          $scope.timetables[t.wday] = {};
        }
        return $scope.timetables[t.wday][t.period] = t;
      });
    });
  });

}).call(this);
