app = angular.module 'ETimetable'

app.controller 'DepartmentsCtrl',
  ($scope, $routeParams) ->

    getHref = (department) ->
      "#/#{$routeParams.grade}/#{department}/#{if $routeParams.grade > 3 && department == 'e' then 'courses' else 'timetables'}"

    $scope.departments = [
      {label: '機械工学科', href: getHref('m')}
      {label: '電気情報工学科', href: getHref('e')}
      {label: '都市システム工学科', href: getHref('c')}
      {label: '建築学科', href: getHref('a')}
    ]

