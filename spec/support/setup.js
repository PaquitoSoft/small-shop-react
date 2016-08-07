// https://github.com/lelandrichardson/enzyme-example-mocha/blob/master/test/.setup.js
require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(window).forEach(property => {
	if (typeof global[property] === 'undefined') {
		exposedProperties.push(property);
		global[property] = window[property];
	}
});

global.navigator = {
	userAgent: 'node.js'
};

documentRef = document;
