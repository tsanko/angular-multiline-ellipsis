/**
 * @ngdoc directive
 * @name TT.directive:multiLineEllipsis
 * @restrict A
 * @scope
 *
 * @description
 * Directive to apply ellipsis to a multi line text.
 *
 * @usage
 * <div multi-line-ellipsis='{"height" : "75", "lineHeight" : "25", "lines" : "3" }' >
 *     Only two things are infinite, the universe and human stupidity,
 *     and I'm not sure about the former.
 *
 *     -- A. Einstein
 * </div>
 *
 * @example
 */
angular
	.module('TT.multiLineEllipsis')
	.directive('multiLineEllipsis', multiLineEllipsis);

/* @ngAnnotate */
function multiLineEllipsis() {

	'use strict';

	return {
		templateUrl     : 'template/multi-line-ellipsis.html',
		transclude      : true,
		replace         : true,
		scope           : {
			multiLineEllipsis: '@'
		},
		controller      : 'EllipsisController',
		controllerAs    : 'ellipsis',
		bindToController: true
	};
}
