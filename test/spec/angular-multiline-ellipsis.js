/*global angular, $, module, expect, beforeEach, afterEach, toBe */

describe('Module: angularMultiLineEllipsis', function () {

	'use strict';

	var scope,
		$sandbox,
		$compile,
		$timeout,
		text = 'Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.';

	// load the controller's module
	beforeEach(module('TT.multiLineEllipsis'));

	beforeEach(inject(function ($injector, $rootScope, _$compile_, _$timeout_) {
		scope = $rootScope;
		$compile = _$compile_;
		$timeout = _$timeout_;

		$sandbox = $('<div id="sandbox"></div>').appendTo($('body'));
	}));

	afterEach(function () {
		$sandbox.remove();
		scope.$destroy();
	});

	var templates = {
		'default': {
			scope  : {},
			element: '' +
			'<div multi-line-ellipsis>' +
				text +
			'</div>'
		}
	};

	function compileDirective(template) {
		template = template ? templates[template] : templates['default'];
		angular.extend(scope, template.scope || templates['default'].scope);
		var $element = $(template.element).appendTo($sandbox);
		$element = $compile($element)(scope);
		scope.$digest();
		return $element;
	}

	it('should implement "transclude"', function () {
		var elm = compileDirective();
		// width of the element is not restricted so
		// actual element text will be -> text + ' ... Vew More'
		expect(elm.text()).toContain(text);
	});

});
