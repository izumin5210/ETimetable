app = angular.module 'ETimetable'

app.factory 'TimetablesService', ($rootScope) ->

  cache: {}
  currentTab: 0

  changeTab: (index) ->
    @currentTab = index
    $rootScope.$broadcast 'changeTab', index
