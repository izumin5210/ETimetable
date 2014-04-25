app = angular.module 'ETimetable'

app.controller 'CoursesCtrl',
  ($scope, $routeParams) ->

    grade = $routeParams.grade
    department = $routeParams.department


    getHref = (courses) ->
      "#/#{grade}/#{department}/#{courses}/timetables"

    if department == 'e'
      $scope.courses = [
        {abbr: 'd', label: '電気電子工学コース', href: getHref('d')}
        {abbr: 'j', label: '情報工学コース', href: getHref('j')}
      ]
      $scope.pageBack =
        label: '学科を選択'
        href: "#/#{grade}/departments"
    else if department == 'adv'
      $scope.courses = [
        {abbr: 'me', label: '機械・電子システム工学専攻', href: getHref('me')}
        {abbr: 'ac', label: '建築・都市システム工学専攻', href: getHref('ac')}
      ]
      $scope.pageBack =
        label: '学年を選択'
        href: '#/grades'
