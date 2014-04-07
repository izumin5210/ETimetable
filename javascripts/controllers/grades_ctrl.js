(function() {
  var app;

  app = angular.module('ETimetable');

  app.controller('GradesCtrl', function($scope) {
    $scope.grades = [
      {
        label: '1年',
        value: 1
      }, {
        label: '2年',
        value: 2
      }, {
        label: '3年',
        value: 3
      }, {
        label: '4年',
        value: 4
      }, {
        label: '5年',
        value: 5
      }, {
        label: '専攻科1年',
        value: 1,
        department: 'adv'
      }, {
        label: '専攻科2年',
        value: 2,
        department: 'adv'
      }
    ];
    return $scope.isAdvDept = function(grade) {
      return grade.department != null;
    };
  });

}).call(this);
