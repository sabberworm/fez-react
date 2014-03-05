var transform = require('react-tools').transform;
var Promise = require('bluebird');

function react(options) {
	options = options || {};
	options.separator = 'separator' in options ? options.separator : '\n';
	return function(inputs) {
		return Promise.all(inputs.asBuffers()).then(function(buffers) {
			return buffers.map(function(b) {
				return transform(b.toString());
			}).join('\n');
		});
	};
}

module.exports = react;