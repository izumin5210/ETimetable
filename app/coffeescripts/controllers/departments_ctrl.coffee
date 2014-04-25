app = angular.module 'ETimetable'

app.controller 'DepartmentsCtrl',
  ($scope, $routeParams) ->

    $scope.grade = $routeParams.grade

    getHref = (department) ->
      "#/#{$scope.grade}/#{department}/#{if $scope.grade > 3 && department == 'e' then 'courses' else 'timetables'}"

    $scope.departments = [
      {abbr: 'm', label: '機械工学科', href: getHref('m')}
      {abbr: 'e', label: '電気情報工学科', href: getHref('e')}
      {abbr: 'c', label: '都市システム工学科', href: getHref('c')}
      {abbr: 'a', label: '建築学科', href: getHref('a')}
    ]
