(function() {
  var app;

  app = angular.module('ETimetable');

  app.controller('CoursesCtrl', function($scope, $routeParams) {
    var department, getHref;
    department = $routeParams.department;
    getHref = function(courses) {
      return "#/" + $routeParams.grade + "/" + department + "/" + courses + "/timetables";
    };
    if (department === 'e') {
      return $scope.courses = [
        {
          label: '電気電子工学コース',
          href: getHref('d')
        }, {
          label: '情報工学コース',
          href: getHref('j')
        }
      ];
    } else if (department === 'adv') {
      return $scope.courses = [
        {
          label: '機械・電子システム工学専攻',
          href: getHref('me')
        }, {
          label: '建築・都市システム工学専攻',
          href: getHref('ac')
        }
      ];
    }
  });

}).call(this);