var app;

app = angular.module('ETimetable');

app.factory('TimetablesService', function($rootScope) {
  return {
    cache: {},
    currentTab: 0,
    changeTab: function(index) {
      this.currentTab = index;
      return $rootScope.$broadcast('changeTab', index);
    }
  };
});
