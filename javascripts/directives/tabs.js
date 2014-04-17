var app;

app = angular.module('ETimetable');

app.directive('tabSet', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/tabset.html',
    transclude: true,
    scope: {},
    controller: function($scope) {
      var tabs;
      tabs = $scope.tabs = [];
      this.addTab = function(tab) {
        tab.active = tabs.length === 0;
        return tabs.push(tab);
      };
      $scope.select = function(tab) {
        angular.forEach(tabs, function(tab) {
          return tab.active = false;
        });
        return tab.active = true;
      };
    },
    link: function(scope, element, attrs, ctrl) {}
  };
});

app.directive('tabPane', function() {
  return {
    require: '^tabSet',
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/tab.html',
    transclude: true,
    scope: {
      heading: '@'
    },
    link: function(scope, element, attrs, ctrl) {
      return ctrl.addTab(scope);
    }
  };
});
