app = angular.module 'ETimetable'

CLS_HOVER_DEFAULT = "hover"
CLS_ACTIVE_DEFAULT = "active"

app.directive 'clsHover', ->
  restrict: 'A'
  link: (scope, element, attrs, ctrl) ->

    clsHover = attrs.clsHover || CLS_HOVER_DEFAULT

    element.on 'mouseenter', -> element.addClass clsHover
    element.on 'mouseleave', -> element.removeClass clsHover


app.directive 'clsActive', ->
  restrict: 'A'
  link: (scope, element, attrs, ctrl) ->

    clsActive = attrs.clsActive || CLS_ACTIVE_DEFAULT

    element.on 'touchstart mousedown', -> element.addClass clsActive
    element.on 'touchmove touchcancel touchend mousemove mouseup', -> element.removeClass clsActive
