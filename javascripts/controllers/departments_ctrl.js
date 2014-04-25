var app;

app = angular.module('ETimetable');

app.controller('DepartmentsCtrl', function($scope, $routeParams) {
  var getHref;
  $scope.grade = $routeParams.grade;
  getHref = function(department) {
    return "#/" + $scope.grade + "/" + department + "/" + ($scope.grade > 3 && department === 'e' ? 'courses' : 'timetables');
  };
  return $scope.departments = [
    {
      abbr: 'm',
      label: '機械工学科',
      href: getHref('m')
    }, {
      abbr: 'e',
      label: '電気情報工学科',
      href: getHref('e')
    }, {
      abbr: 'c',
      label: '都市システム工学科',
      href: getHref('c')
    }, {
      abbr: 'a',
      label: '建築学科',
      href: getHref('a')
    }
  ];
});
