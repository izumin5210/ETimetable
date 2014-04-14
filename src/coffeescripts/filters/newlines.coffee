app = angular.module 'ETimetable'

app.filter 'noHTML', ->
  (text) -> text.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/, '&amp;') if text?

app.filter 'newlines', ($sce) ->
  (text) -> $sce.trustAsHtml(if text? then text.replace(/\n/g, '<br />') else '')
