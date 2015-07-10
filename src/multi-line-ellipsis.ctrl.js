/*!
 *  Many thanks to Mobify http://www.mobify.com/blog/multiline-ellipsis-in-pure-css/
 *  for this brilliant CSS trick
 */

/**
 * @ngdoc controller
 * @name rexWebApp.controllers:EllipsisController
 * @description
 * # EllipsisController
 */

angular
	.module('TT.multiLineEllipsis', [])
	.controller('EllipsisController', EllipsisController);

/* @ngInject */
function EllipsisController() {
	'use strict';

	var ellipsis = this;

	ellipsis.viewMore = false;
	ellipsis.viewHeight = 75;
	ellipsis.viewLineHeight = 25;
	ellipsis.viewMoreDescr = viewMoreDescr;

	init();

	////////////////

	function init() {
		if (!ellipsis.multiLineEllipsisLines) {
			ellipsis.multiLineEllipsisLines = 3;
		}

		ellipsis.viewHeight = ellipsis.multiLineEllipsisLines * ellipsis.viewLineHeight;
	}

	function viewMoreDescr() {
		ellipsis.viewMore = true;
	}
}
