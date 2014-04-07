app = angular.module 'ETimetable'

app.controller 'DepartmentsCtrl',
  ($scope, $routeParams) ->

    grade = $routeParams.grade

    getHref = (grade, department) ->
      "#/#{grade}/#{department}/#{if grade > 3 && department == 'e' then 'courses' else 'timetables'}"

    $scope.departments = [
      {label: '機械工学科', href: getHref(grade, 'm')}
      {label: '電気情報工学科', href: getHref(grade, 'e')}
      {label: '都市システム工学科', href: getHref(grade, 'c')}
      {label: '建築学科', href: getHref(grade, 'a')}
    ]

