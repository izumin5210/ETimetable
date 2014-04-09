(function() {
  var app;

  app = angular.module('ETimetable');

  app.filter('truncate', function() {
    return function(text, length, terminator) {
      if (isNaN(length)) {
        length = 10;
      }
      if (terminator == null) {
        terminator = '...';
      }
      if ((text == null) || text.length < length) {
        return text;
      } else {
        return String(text).substring(0, length) + terminator;
      }
    };
  });

}).call(this);
