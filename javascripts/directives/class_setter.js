var CLS_ACTIVE_DEFAULT, CLS_HOVER_DEFAULT, app;

app = angular.module('ETimetable');

CLS_HOVER_DEFAULT = "hover";

CLS_ACTIVE_DEFAULT = "active";

app.directive('clsHover', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, ctrl) {
      var clsHover;
      clsHover = attrs.clsHover || CLS_HOVER_DEFAULT;
      element.on('mouseenter', function() {
        return element.addClass(clsHover);
      });
      return element.on('mouseleave', function() {
        return element.removeClass(clsHover);
      });
    }
  };
});

app.directive('clsActive', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, ctrl) {
      var clsActive;
      clsActive = attrs.clsActive || CLS_ACTIVE_DEFAULT;
      element.on('touchstart mousedown', function() {
        return element.addClass(clsActive);
      });
      return element.on('touchmove touchcancel touchend mousemove mouseup', function() {
        return element.removeClass(clsActive);
      });
    }
  };
});
