var TimetableCell;

TimetableCell = (function() {
  function TimetableCell(wday, period, cell) {
    this.wday = wday;
    this.period = period;
    this.lectures = cell;
  }

  TimetableCell.prototype.hasLectures = function() {
    return this.lectures.length > 0;
  };

  TimetableCell.prototype.hasMultiLectures = function() {
    return this.lectures.length > 1;
  };

  TimetableCell.prototype.title = function(delimiter) {
    var title;
    if (delimiter == null) {
      delimiter = '/';
    }
    if (this.lectures.length === 1) {
      return this.lectures[0].title;
    } else {
      title = '';
      angular.forEach(this.lectures, function(l) {
        return title += "" + delimiter + l.title;
      });
      return title.slice(delimiter.length);
    }
  };

  TimetableCell.prototype.ids = function() {
    if (this.lectures.length === 1) {
      return this.lectures[0].lectureId;
    } else {
      return _.map(this.lecture, function(l) {
        return l.id;
      });
    }
  };

  return TimetableCell;

})();
