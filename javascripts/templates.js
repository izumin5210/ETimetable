angular.module('ETimetable').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/courses.html',
    "<header class=\"header\"><h1>コースを選択</h1></header><ul class=\"card-set\"><li ng-repeat=\"course in courses\"><a ng-href=\"{{course.href}}\" cls-hover=\"\" cls-active=\"\" class=\"card-item card-item-fixed card-item-shrinkable\"><abbr title=\"{{course.label}}\" class=\"card-item-icon\">{{course.abbr}}</abbr> <span class=\"card-item-content\">{{course.label}}</span> <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span></a></li></ul>"
  );


  $templateCache.put('templates/departments.html',
    "<header class=\"header\"><h1>学科を選択</h1></header><ul class=\"card-set\"><li ng-repeat=\"department in departments\"><a ng-href=\"{{department.href}}\" cls-hover=\"\" cls-active=\"\" class=\"card-item card-item-fixed card-item-shrinkable\"><abbr title=\"{{department.label}}\" class=\"card-item-icon icon-{{department.abbr}}\">{{department.abbr}}</abbr> <span class=\"card-item-content\">{{department.label}}</span> <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span></a></li></ul>"
  );


  $templateCache.put('templates/grades.html',
    "<header class=\"header\"><h1>学年を選択</h1></header><ul class=\"card-set\"><li ng-repeat=\"grade in grades\"><a ng-href=\"{{grade.href}}\" cls-hover=\"\" cls-active=\"\" class=\"card-item card-item-fixed card-item-shrinkable\"><span class=\"card-item-content\">{{grade.label}}</span> <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span></a></li></ul>"
  );


  $templateCache.put('templates/lectures.html',
    "<header class=\"header header-{{department.abbr}}\"><h1 ng-hide=\"isLoading\">{{class_}}</h1></header><div ng-include=\"'templates/loading.html'\" ng-show=\"isLoading\"></div><article class=\"card-set\" ng-hide=\"isLoading\"><section class=\"card-item\"><h1>{{lecture.title}}</h1><ul class=\"slash-delimited-list\"><li ng-repeat=\"lecturer in lecture.lecturers\">{{lecturer.name}}</li></ul><ul class=\"slash-delimited-list\"><li>{{lecture.term}}</li><li>{{lecture.divide}}</li><li>{{lecture.requiredSelective}}</li><li>{{lecture.credit}}単位</li></ul><h2>単位を落とすには</h2><p ng-bind-html=\"lecture.failureAbsence | noHTML | newlines\"></p><h2>評価</h2><p ng-bind-html=\"lecture.evaluation | noHTML | newlines\"></p><h2>概要</h2><p ng-bind-html=\"lecture.abstract | noHTML | newlines\"></p><h2>テキスト（参考文献）</h2><p ng-bind-html=\"lecture.textbooks | noHTML | newlines\"></p><h2>連絡先</h2><ul><li ng-repeat=\"contact in lecture.contacts\">{{contact.email}}</li></ul></section><section class=\"card-item\" ng-repeat=\"plan in lecture.plans | orderBy:'number'\"><h1>#{{plan.number}} {{plan.title}}</h1><p>{{plan.detail}}</p></section></article>"
  );


  $templateCache.put('templates/loading.html',
    "<div class=\"card-set\"><div class=\"card-item card-item-fixed\"><span class=\"card-item-icon\"><i class=\"fa fa-spinner fa-spin fa-lg\"></i></span> <span class=\"card-item-content\">now loading...</span></div></div>"
  );


  $templateCache.put('templates/tab.html',
    "<div class=\"tab-pane\" ng-show=\"active\" ng-transclude=\"\"></div>"
  );


  $templateCache.put('templates/tabset.html',
    "<div><ul class=\"nav-tabs\"><li ng-repeat=\"tab in tabs\" class=\"tab\" cls-hover=\"tab-hover\" cls-active=\"tab-click\" ng-class=\"{active: tab.active}\"><a ng-href=\"{{tab.href}}\">{{tab.heading}}</a></li></ul><div class=\"tab-content\" ng-transclude=\"\"></div></div>"
  );


  $templateCache.put('templates/timetables.html',
    "<header class=\"header header-{{department.abbr}}\"><h1>{{class_}}</h1></header><div ng-include=\"'templates/loading.html'\" ng-show=\"isLoading\"></div><tab-set ng-hide=\"isLoading\"><tab-pane ng-repeat=\"wday in [1, 2, 3, 4, 5]\" heading=\"{{wdayJa[wday]}}\" href=\"{{href(wday)}}\"><ol class=\"card-set\"><li ng-repeat=\"(period, cell) in timetable.columns[wday].cells\"><a ng-click=\"onCellClicked(cell)\" cls-hover=\"\" cls-active=\"\" class=\"card-item card-item-fixed\" ng-class=\"{'card-item-shrinkable': cell.hasLectures(), 'card-item-disable':!cell.hasLectures()}\"><span class=\"card-item-icon icon-{{department.abbr}}\">{{period}}</span> <span class=\"card-item-content\">{{cell.title() | truncate:13}}</span> <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span></a><div class=\"modal-wrapper\" ng-if=\"cell.hasMultiLectures()\" ng-show=\"cell.active\" ng-click=\"modalDismiss(cell)\"><div class=\"modal\"><header class=\"header header-{{department.abbr}}\"><h1>科目を選択</h1></header><ul class=\"card-set\"><li ng-repeat=\"lecture in cell.lectures\"><a ng-click=\"onModalSelected(cell, lecture)\" cls-hover=\"\" cls-active=\"\" class=\"card-item card-item-fixed card-item-shrinkable\"><span class=\"card-item-icon icon-{{department.abbr}}\">{{period}}</span> <span class=\"card-item-content\">{{lecture.title | truncate:13}}</span> <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span></a></li></ul></div></div></li></ol></tab-pane></tab-set>"
  );

}]);
