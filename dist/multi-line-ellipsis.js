/*!
 *  Many thanks to Mobify http://www.mobify.com/blog/multiline-ellipsis-in-pure-css/
 *  for this brilliant CSS trick
 */
/**
 * @ngdoc controller
 * @name TT.controllers:EllipsisController
 * @description
 * # EllipsisController
 */
angular.module('TT.multiLineEllipsis', []).controller('EllipsisController', EllipsisController);
/* @ngInject */
function EllipsisController() {
  'use strict';
  var ellipsis = this;
  // Defaults
  ellipsis.viewMore = false;
  ellipsis.viewHeight = 75;
  ellipsis.viewLineHeight = 25;
  ellipsis.viewLines = 3;
  // Functions
  ellipsis.viewMoreDescr = viewMoreDescr;
  init();
  ////////////////
  function init() {
    if (!ellipsis.multiLineEllipsis) {
      return;
    }
    ellipsis.multiLineEllipsis = JSON.parse(ellipsis.multiLineEllipsis);
    if (ellipsis.multiLineEllipsis.lines && ellipsis.multiLineEllipsis.height) {
      ellipsis.viewLines = ellipsis.multiLineEllipsis.lines;
      ellipsis.viewHeight = ellipsis.multiLineEllipsis.height;
      ellipsis.viewLineHeight = Math.ceil(ellipsis.viewHeight / ellipsis.viewLines);
    } else if (ellipsis.multiLineEllipsis.lines && ellipsis.multiLineEllipsis.lineHeight) {
      ellipsis.viewLines = ellipsis.multiLineEllipsis.lines;
      ellipsis.viewLineHeight = ellipsis.multiLineEllipsis.lineHeight;
      ellipsis.viewHeight = Math.ceil(ellipsis.viewLineHeight * ellipsis.viewLines);
    }
  }
  function viewMoreDescr() {
    ellipsis.viewMore = true;
  }
}/**
 * @ngdoc directive
 * @name TT.directive:multiLineEllipsis
 * @restrict A
 * @scope
 *
 * @description
 * Directive to apply ellipsis to a multi line text.
 *
 * @usage
 * <div multi-line-ellipsis multi-line-ellipsis-lines="3" >
 *     Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.
 *     -- A. Einstein
 * </div>
 *
 * @example
 */
angular.module('TT.multiLineEllipsis').directive('multiLineEllipsis', multiLineEllipsis);
/* @ngAnnotate */
function multiLineEllipsis() {
  'use strict';
  return {
    templateUrl: 'template/multi-line-ellipsis.html',
    transclude: true,
    replace: true,
    scope: { multiLineEllipsis: '@' },
    controller: 'EllipsisController',
    controllerAs: 'ellipsis',
    bindToController: true
  };
}/**
 * @ngdoc template
 */
angular.module('TT.multiLineEllipsis').run([
  '$templateCache',
  function ($templateCache) {
    'use strict';
    $templateCache.put('template/multi-line-ellipsis.html', '<div class="ellipsis"' + ' ng-style="(ellipsis.viewMore) && { \'height\' : \'auto\' }"' + ' style="height : {{ ::ellipsis.viewHeight }}px; line-height : {{ ::ellipsis.viewLineHeight }}px;" >' + '<div class="before" style="height : {{ ::ellipsis.viewHeight }}px;" ></div >' + '<div class="body" >' + '<div ng-transclude ></div >' + '</div >' + '<div class="after"' + ' style="top : -{{ ::ellipsis.viewLineHeight }}px;"' + ' ng-click="ellipsis.viewMoreDescr()"' + ' ng-if="!ellipsis.viewMore" > ... View More' + '</div >' + '</div >');
  }
]);