(function() {
  var app;

  app = angular.module('ETimetable');

  app.controller('DepartmentsCtrl', function($scope, $routeParams) {
    var getHref, grade;
    grade = $routeParams.grade;
    getHref = function(grade, department) {
      return "#/" + grade + "/" + department + "/" + (grade > 3 && department === 'e' ? 'courses' : 'timetables');
    };
    return $scope.departments = [
      {
        label: '機械工学科',
        href: getHref(grade, 'm')
      }, {
        label: '電気情報工学科',
        href: getHref(grade, 'e')
      }, {
        label: '都市システム工学科',
        href: getHref(grade, 'c')
      }, {
        label: '建築学科',
        href: getHref(grade, 'a')
      }
    ];
  });

}).call(this);
