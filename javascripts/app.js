(function() {
  var app;

  app = angular.module('ETimetable', ['ngRoute']);

  app.constant('config', {
    apiEndpoint: 'http://0.0.0.0:3000/api/v1',
    defaultParams: {
      year: 2013,
      term: '後期',
      callback: 'JSON_CALLBACK'
    }
  });

  app.config(function($routeProvider, $locationProvider) {
    return $routeProvider.when('/grades', {
      templateUrl: '/templates/grades.html',
      controller: 'GradesCtrl'
    }).when('/:grade/departments', {
      templateUrl: '/templates/departments.html',
      controller: 'DepartmentsCtrl'
    }).when('/:grade/:department/courses', {
      templateUrl: '/templates/courses.html',
      controller: 'CoursesCtrl'
    }).when('/:grade/:department/timetables', {
      templateUrl: '/templates/timetables.html',
      controller: 'TimetablesCtrl'
    }).when('/:grade/:department/:course/timetables', {
      templateUrl: '/templates/timetables.html',
      controller: 'TimetablesCtrl'
    }).when('/:grade/:department/timetables/:wday', {
      templateUrl: '/templates/timetables.html',
      controller: 'TimetablesCtrl'
    }).when('/:grade/:department/:course/timetables/:wday', {
      templateUrl: '/templates/timetables.html',
      controller: 'TimetablesCtrl'
    }).otherwise({
      redirectTo: '/grades'
    });
  });

}).call(this);
