# fez-react

[Fez](http://fez.github.io/) operation for transforming [React](http://facebook.github.io/react/docs/tutorial.html) JSX code to JS.

## Install

    npm install fez-react --save-dev

## Modify your `fez.js`

	var react = require('fez-react');

	spec.with("path/to/your/*.jsx").each(function(file) {
		spec.rule(file, file.patsubst("%.jsx", "%.js"), react({separator: '\n'});
	});
