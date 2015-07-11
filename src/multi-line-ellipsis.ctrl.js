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
}
