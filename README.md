# angular-multiline-ellipsis   <img src="https://travis-ci.org/tsanko/angular-multiline-ellipsis.svg?branch=master" >
AngularJS directive for ellipsis multi line text using pure CSS


## Getting Started

## Install

```sh
bower install angular-multiline-ellipsis 
```

In your web page:

```html
<script src="angular.js"></script>
<script src="dist/angular-multiline-ellipsis.min.js"></script>
```

In your app.js 

```html
angular.module('rexAdminApp', [
	...
	'TT.multiLineEllipsis'
])
```

## Params

lines		- Required. How many lines to be visible.

height		- Optional. Height of the element.

lineHeight	- Optional. Text line height.

At least one of the OPTIONAL params need accompany 'lines'.

## Examples

```html
<div multi-line-ellipsis='{"height" : "75", "lineHeight" : "25", "lines" : "3" }' >
   Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.
   -- A. Einstein
</div>
```

## Credits

Many thanks to Mobify http://www.mobify.com/blog/multiline-ellipsis-in-pure-css/
for the clever CSS
