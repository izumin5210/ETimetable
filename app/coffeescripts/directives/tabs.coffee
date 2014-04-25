app = angular.module 'ETimetable'

app.directive 'tabSet', ->
  restrict: 'E'
  replace: true
  templateUrl: 'templates/tabset.html'
  transclude: true
  scope: {}
  controller: ($scope, TimetablesService) ->
    tabs = $scope.tabs = []
    selected = TimetablesService.currentTab

    @addTab = (tab) ->
      tabs.push tab
      if tabs.length > selected
        $scope.select tabs[selected]
      else
        tab.active = (tabs.length == 0)

    $scope.select = (tab) ->
      angular.forEach tabs, (tab) -> tab.active = false
      tab.active = true

    $scope.$on 'changeTab', (event, index) ->
      selected = index
      $scope.select tabs[index] if tabs.length > index

    return
  link: (scope, element, attrs, ctrl) ->


app.directive 'tabPane', ->
  require: '^tabSet'
  restrict: 'E'
  replace: true
  templateUrl: 'templates/tab.html'
  transclude: true
  scope:
    heading: '@'
    href: '@'
  link: (scope, element, attrs, ctrl) ->
    ctrl.addTab(scope)
