class Timetable

  constructor: (timetables) ->
    @columns = {}
    lectures = {1: [], 2: [], 3: [], 4: [], 5: []}
    angular.forEach timetables, (l) -> lectures[l.wday].push l
    angular.forEach lectures, (column, wday) =>
      @columns[wday] = new TimetableColumn(wday, column)

  find_cell: (wday, period) ->
    angular.forEach @columns, (col) ->
      return col.find_cell(period) if col.wday = wday
