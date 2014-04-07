app = angular.module 'ETimetable'

app.controller 'CoursesCtrl',
  ($scope, $routeParams) ->

    department = $routeParams.department

    getHref = (courses) ->
      "#/#{$routeParams.grade}/#{department}/#{courses}/timetables"

    if department == 'e'
      $scope.courses = [
        {label: '電気電子工学コース', href: getHref('d')}
        {label: '情報工学コース', href: getHref('j')}
      ]
    else if department == 'adv'
      $scope.courses = [
        {label: '機械・電子システム工学専攻', href: getHref('me')}
        {label: '建築・都市システム工学専攻', href: getHref('ac')}
      ]


