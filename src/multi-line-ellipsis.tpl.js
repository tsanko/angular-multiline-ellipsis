/**
 * @ngdoc template
 */
angular
	.module('TT.multiLineEllipsis')
	.run(['$templateCache', function ($templateCache) {

		'use strict';

		$templateCache.put(
			'template/multi-line-ellipsis.html',
			'<div class="ellipsis"' +
				' ng-style="(ellipsis.viewMore) && { \'height\' : \'auto\' }"' +
				' style="height : {{ ::ellipsis.viewHeight }}px; line-height : {{ ::ellipsis.viewLineHeight }}px;" >' +

				'<div class="before" style="height : {{ ::ellipsis.viewHeight }}px;" ></div >' +
				'<div class="body" >' +
					'<div ng-transclude ></div >' +
				'</div >' +
				'<div class="after"' +
					' style="top : -{{ ::ellipsis.viewLineHeight }}px;"' +
					' ng-click="ellipsis.viewMoreDescr()"' +
					' ng-if="!ellipsis.viewMore" > ... View More' +
				'</div >' +
			'</div >'
		);
	}]);
