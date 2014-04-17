app = angular.module 'ETimetable'

app.directive 'tabSet', ->
  restrict: 'E'
  replace: true
  templateUrl: 'templates/tabset.html'
  transclude: true
  scope: {}
  controller: ($scope) ->
    tabs = $scope.tabs = []
    this.addTab = (tab) ->
      tab.active = (tabs.length == 0)
      tabs.push tab

    $scope.select = (tab) ->
      angular.forEach tabs, (tab) -> tab.active = false
      tab.active = true
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
  link: (scope, element, attrs, ctrl) ->
    ctrl.addTab(scope)

