/*global angular, $, module, expect, beforeEach, afterEach, toBe */

describe('Module: angularMultilineEllipsis', function () {

	'use strict';

	var scope,
		$sandbox,
		$compile,
		$timeout,
		text = 'Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.';

	// load the controller's module
	beforeEach(module('TT.multilineEllipsis'));

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
			'<div multi-line-ellipsis multi-line-ellipsis-lines="3">' +
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
		expect(elm.text()).toBe(text);
	});

});
