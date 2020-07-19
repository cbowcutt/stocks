var request = require('request');

var url = "https://api.iextrading.com/1.0/"
var exports = module.exports = {};

exports.tops = (callback) => {
	request.get({
		url: url + "/tops",
	}, function(error, response, body) {
		if(error) {
			throw(error);
		}
		callback(body);
	})
};

exports.symbols = function(callback) {
	request.get({
		url: url + "/ref-data/symbols"
	}, function(error, response, body) {
		if(error) {
			throw(error);
		}
		callback(body);
	})
}
