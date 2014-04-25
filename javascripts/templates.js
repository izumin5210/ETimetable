angular.module('ETimetable').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/courses.html',
    "<header class=\"header\">\n" +
    "  <h1>コースを選択</h1>\n" +
    "</header>\n" +
    "<ul class=\"card-set\">\n" +
    "  <li ng-repeat=\"course in courses\">\n" +
    "    <a ng-href=\"{{course.href}}\" cls-hover cls-active class=\"card-item card-item-fixed card-item-shrinkable\">\n" +
    "      <abbr title=\"{{course.label}}\" class=\"card-item-icon\">{{course.abbr}}</abbr>\n" +
    "      <span class=\"card-item-content\">{{course.label}}</span>\n" +
    "      <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span>\n" +
    "    </a>\n" +
    "  </li>\n" +
    "</ul>\n"
  );


  $templateCache.put('templates/departments.html',
    "<header class=\"header\">\n" +
    "  <h1>学科を選択</h1>\n" +
    "</header>\n" +
    "<ul class=\"card-set\">\n" +
    "  <li ng-repeat=\"department in departments\">\n" +
    "    <a ng-href=\"{{department.href}}\" cls-hover cls-active class=\"card-item card-item-fixed card-item-shrinkable\">\n" +
    "      <abbr title=\"{{department.label}}\" class=\"card-item-icon icon-{{department.abbr}}\">{{department.abbr}}</abbr>\n" +
    "      <span class=\"card-item-content\">{{department.label}}</span>\n" +
    "      <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span>\n" +
    "    </a>\n" +
    "  </li>\n" +
    "</ul>\n"
  );


  $templateCache.put('templates/grades.html',
    "<header class=\"header\">\n" +
    "  <h1>学年を選択</h1>\n" +
    "</header>\n" +
    "<ul class=\"card-set\">\n" +
    "  <li ng-repeat=\"grade in grades\">\n" +
    "    <a ng-href=\"{{grade.href}}\" cls-hover cls-active class=\"card-item card-item-fixed card-item-shrinkable\">\n" +
    "      <span class=\"card-item-content\">{{grade.label}}</span>\n" +
    "      <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span>\n" +
    "    </a>\n" +
    "  </li>\n" +
    "</ul>\n"
  );


  $templateCache.put('templates/lectures.html',
    "<header class=\"header header-{{department.abbr}}\">\n" +
    "  <h1 ng-hide=\"isLoading\">{{class_}}</h1>\n" +
    "</header>\n" +
    "\n" +
    "<div ng-include=\"'templates/loading.html'\" ng-show=\"isLoading\"></div>\n" +
    "\n" +
    "<article class=\"card-set\" ng-hide=\"isLoading\">\n" +
    "  <section class=\"card-item\">\n" +
    "    <h1>{{lecture.title}}</h1>\n" +
    "    <ul class=\"slash-delimited-list\">\n" +
    "      <li ng-repeat=\"lecturer in lecture.lecturers\">{{lecturer.name}}</li>\n" +
    "    </ul>\n" +
    "    <ul class=\"slash-delimited-list\">\n" +
    "      <li>{{lecture.term}}</li><li>{{lecture.divide}}</li><li>{{lecture.requiredSelective}}</li><li>{{lecture.credit}}単位</li>\n" +
    "    </ul>\n" +
    "    <h2>単位を落とすには</h2>\n" +
    "    <p ng-bind-html=\"lecture.failureAbsence | noHTML | newlines\"></p>\n" +
    "    <h2>評価</h2>\n" +
    "    <p ng-bind-html=\"lecture.evaluation | noHTML | newlines\"></p>\n" +
    "    <h2>概要</h2>\n" +
    "    <p ng-bind-html=\"lecture.abstract | noHTML | newlines\"></p>\n" +
    "    <h2>テキスト（参考文献）</h2>\n" +
    "    <p ng-bind-html=\"lecture.textbooks | noHTML | newlines\"></p>\n" +
    "    <h2>連絡先</h2>\n" +
    "    <ul>\n" +
    "      <li ng-repeat=\"contact in lecture.contacts\">{{contact.email}}</li>\n" +
    "    </ul>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"card-item\" ng-repeat=\"plan in lecture.plans | orderBy:'number'\">\n" +
    "    <h1>#{{plan.number}} {{plan.title}}</h1>\n" +
    "    <p>{{plan.detail}}</p>\n" +
    "  </section>\n" +
    "</article>\n"
  );


  $templateCache.put('templates/loading.html',
    "<div class=\"card-set\">\n" +
    "  <div class=\"card-item card-item-fixed\">\n" +
    "    <span class=\"card-item-icon\"><i class=\"fa fa-spinner fa-spin fa-lg\"></i></span>\n" +
    "    <span class=\"card-item-content\">now loading...</span>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/tab.html',
    "<div class=\"tab-pane\" ng-show=\"active\" ng-transclude>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/tabset.html',
    "<div>\n" +
    "  <ul class=\"nav-tabs\">\n" +
    "    <li ng-repeat=\"tab in tabs\" class=\"tab\" cls-hover=\"tab-hover\" cls-active=\"tab-click\" ng-class=\"{active: tab.active}\">\n" +
    "      <a ng-href=\"{{tab.href}}\">{{tab.heading}}</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"tab-content\" ng-transclude>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/timetables.html',
    "<header class=\"header header-{{department.abbr}}\">\n" +
    "  <h1>{{class_}}</h1>\n" +
    "</header>\n" +
    "\n" +
    "<div ng-include=\"'templates/loading.html'\" ng-show=\"isLoading\"></div>\n" +
    "\n" +
    "<tab-set ng-hide=\"isLoading\">\n" +
    "  <tab-pane ng-repeat=\"wday in [1, 2, 3, 4, 5]\" heading=\"{{wdayJa[wday]}}\" href=\"{{href(wday)}}\">\n" +
    "    <ol class=\"card-set\">\n" +
    "      <li ng-repeat=\"(period, cell) in timetable.columns[wday].cells\">\n" +
    "        <a ng-click=\"onCellClicked(cell)\" cls-hover cls-active class=\"card-item card-item-fixed\" ng-class=\"{'card-item-shrinkable': cell.hasLectures(), 'card-item-disable':!cell.hasLectures()}\">\n" +
    "          <span class=\"card-item-icon icon-{{department.abbr}}\">{{period}}</span>\n" +
    "          <span class=\"card-item-content\">{{cell.title() | truncate:13}}</span>\n" +
    "          <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span>\n" +
    "        </a>\n" +
    "        <div class=\"modal-wrapper\" ng-if=\"cell.hasMultiLectures()\" ng-show=\"cell.active\" ng-click=\"modalDismiss(cell)\">\n" +
    "          <div class=\"modal\">\n" +
    "            <header class=\"header header-{{department.abbr}}\">\n" +
    "              <h1>科目を選択</h1>\n" +
    "            </header>\n" +
    "            <ul class=\"card-set\">\n" +
    "              <li ng-repeat=\"lecture in cell.lectures\">\n" +
    "                <a ng-click=\"onModalSelected(cell, lecture)\" cls-hover cls-active class=\"card-item card-item-fixed card-item-shrinkable\">\n" +
    "                  <span class=\"card-item-icon icon-{{department.abbr}}\">{{period}}</span>\n" +
    "                  <span class=\"card-item-content\">{{lecture.title | truncate:13}}</span>\n" +
    "                  <span class=\"card-item-caret\"><i class=\"fa fa-chevron-right\"></i></span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ol>\n" +
    "  </tab-pane>\n" +
    "</tab-set>\n" +
    "\n"
  );

}]);
