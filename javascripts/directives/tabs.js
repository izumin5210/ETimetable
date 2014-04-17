var app;

app = angular.module('ETimetable');

app.directive('tabSet', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/tabset.html',
    transclude: true,
    scope: {},
    controller: function($scope, $location, TimetablesService) {
      var selected, tabs;
      tabs = $scope.tabs = [];
      selected = TimetablesService.currentTab;
      this.addTab = function(tab) {
        tabs.push(tab);
        if (tabs.length > selected) {
          return $scope.select(tabs[selected]);
        } else {
          return tab.active = tabs.length === 0;
        }
      };
      $scope.select = function(tab) {
        angular.forEach(tabs, function(tab) {
          return tab.active = false;
        });
        return tab.active = true;
      };
      $scope.$on('changeTab', function(event, index) {
        selected = index;
        if (tabs.length > index) {
          return $scope.select(tabs[index]);
        }
      });
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
      heading: '@',
      href: '@'
    },
    link: function(scope, element, attrs, ctrl) {
      return ctrl.addTab(scope);
    }
  };
});
