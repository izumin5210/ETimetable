var app;

app = angular.module('ETimetable');

app.controller('GradesCtrl', function($scope) {
  $scope.grades = [
    {
      label: '1年',
      href: '#/1/departments'
    }, {
      label: '2年',
      href: '#/2/departments'
    }, {
      label: '3年',
      href: '#/3/departments'
    }, {
      label: '4年',
      href: '#/4/departments'
    }, {
      label: '5年',
      href: '#/5/departments'
    }, {
      label: '専攻科1年',
      href: '#/1/adv/courses'
    }, {
      label: '専攻科2年',
      href: '#/2/adv/courses'
    }
  ];
  return $scope.isAdvDept = function(grade) {
    return grade.department != null;
  };
});
