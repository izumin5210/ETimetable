class TimetableColumn

  constructor: (wday, column) ->
    @wday = wday
    @cells = {}
    lectures = {1: [], 2: [], 3: [], 4: []}
    angular.forEach column, (l) -> lectures[l.period].push l
    angular.forEach lectures, (cell, period) =>
      @cells[period] = new TimetableCell(wday, period, cell)

  find_cell: (period) ->
    _.filter @cells, (cell) -> cell.period == period
