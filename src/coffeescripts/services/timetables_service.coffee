app = angular.module 'ETimetable'

app.factory 'TimetablesService', ($rootScope) ->

  currentTab: 0

  changeTab: (index) ->
    @currentTab = index
    $rootScope.$broadcast 'changeTab', index
