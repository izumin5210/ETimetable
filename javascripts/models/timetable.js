var Timetable;

Timetable = (function() {
  function Timetable(timetables) {
    var lectures;
    this.columns = {};
    lectures = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: []
    };
    angular.forEach(timetables, function(l) {
      return lectures[l.wday].push(l);
    });
    angular.forEach(lectures, (function(_this) {
      return function(column, wday) {
        return _this.columns[wday] = new TimetableColumn(wday, column);
      };
    })(this));
  }

  Timetable.prototype.find_cell = function(wday, period) {
    return angular.forEach(this.columns, function(col) {
      if (col.wday = wday) {
        return col.find_cell(period);
      }
    });
  };

  return Timetable;

})();
