var TimetableColumn;

TimetableColumn = (function() {
  function TimetableColumn(wday, column) {
    var lectures;
    this.wday = wday;
    this.cells = {};
    lectures = {
      1: [],
      2: [],
      3: [],
      4: []
    };
    angular.forEach(column, function(l) {
      return lectures[l.period].push(l);
    });
    angular.forEach(lectures, (function(_this) {
      return function(cell, period) {
        return _this.cells[period] = new TimetableCell(wday, period, cell);
      };
    })(this));
  }

  TimetableColumn.prototype.find_cell = function(period) {
    return _.filter(this.cells, function(cell) {
      return cell.period === period;
    });
  };

  return TimetableColumn;

})();
