app = angular.module 'ETimetable'

app.filter 'truncate', ->
  (text, length, terminator) ->
    length = 10 if isNaN(length)
    terminator = '...' unless terminator?

    if !text? || text.length < length
      text
    else
      String(text).substring(0, length) + terminator
