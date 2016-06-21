# angular-multiline-ellipsis   <img src="https://travis-ci.org/tsanko/angular-multiline-ellipsis.svg?branch=master" >
AngularJS directive for ellipsis multi line text using pure CSS


## Getting Started

## Install

```sh
bower install angular-multiline-ellipsis 
```

After running Grunt you should see following insertions in your index page:

```html 
in <!-- bower:js --> section
<script src="../bower_components/angular-multiline-ellipsis/dist/angular-multiline-ellipsis.min.js"></script>

```html 
in <!-- bower:css --> section
<link rel="stylesheet" href="/../bower_components/angular-multiline-ellipsis/dist/angular-multiline-ellipsis.min.css" />

In your app.js 

```html
angular.module('myApp', [
	...
	'TT.multiLineEllipsis'
])
```

## Params

lines		- Optional. How many lines to be visible. Defaults to 3.

height		- Optional. Height of the element. Defaults to 75(px).

lineHeight	- Optional. Text line height. Defaults to 25(px).

If 'lines' is set at least one of the other OPTIONAL params need to accompany it.

## Examples

### Default (height = 75px, lineHeight = 25px, lines = 3)
```html
<div multi-line-ellipsis >
   Only two things are infinite, the universe and human stupidity, 
   and I'm not sure about the former.
   
   -- A. Einstein
</div>
```

### Tipical 
```html
<div multi-line-ellipsis='{"height" : "75", "lines" : "3" }' >
   Only two things are infinite, the universe and human stupidity, 
   and I'm not sure about the former.
   
   -- A. Einstein
</div>
```

### Full
```html
<div multi-line-ellipsis='{"height" : "75", "lineHeight" : "25", "lines" : "3" }' >
   Only two things are infinite, the universe and human stupidity, 
   and I'm not sure about the former.
   
   -- A. Einstein
</div>
```

## Credits

Many thanks to Mobify http://www.mobify.com/blog/multiline-ellipsis-in-pure-css/
for the clever CSS
