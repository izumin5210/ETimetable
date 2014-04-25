class TimetableCell

  constructor: (wday, period, cell) ->
    @wday = wday
    @period = period
    @lectures = cell

  hasLectures: -> @lectures.length > 0
  hasMultiLectures: -> @lectures.length > 1

  title: (delimiter = '/') ->
    if @lectures.length == 1
      @lectures[0].title
    else
      title = ''
      angular.forEach @lectures, (l) -> title += "#{delimiter}#{l.title}"
      title.slice delimiter.length

  ids: ->
    if @lectures.length == 1
      @lectures[0].lectureId
    else
      _.map @lecture, (l) -> l.id
