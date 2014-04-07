(function() {
  var app;

  app = angular.module('ETimetable');

  app.controller('DepartmentsCtrl', function($scope, $routeParams) {
    var getHref;
    getHref = function(department) {
      return "#/" + $routeParams.grade + "/" + department + "/" + ($routeParams.grade > 3 && department === 'e' ? 'courses' : 'timetables');
    };
    return $scope.departments = [
      {
        label: '機械工学科',
        href: getHref('m')
      }, {
        label: '電気情報工学科',
        href: getHref('e')
      }, {
        label: '都市システム工学科',
        href: getHref('c')
      }, {
        label: '建築学科',
        href: getHref('a')
      }
    ];
  });

}).call(this);
