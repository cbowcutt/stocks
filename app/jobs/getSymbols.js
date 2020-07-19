var iex = require('../services/iex.js');
var dbAccess = require('../db/dbAccess');

iex.symbols(function(body) {
	var asJSON = JSON.parse(body);
	console.log(asJSON);
	var added = new Set();
	var pairs = [];
	for(var i = 0; i < asJSON.length; i++) {
		if(added.has(asJSON[i].symbol)) { console.log(has); }
		added.add(asJSON[i].symbol);
		pairs.push([asJSON[i].symbol, asJSON[i].name]);
	}
	console.log(pairs);
	dbAccess.insertIntoSymbols(pairs);
})
// var exports = module.exports = {

// }

// exports.streamSymbols = () => {
// 	const url = 'https://ws-api.iextrading.com/1.0/last'
// 	const WebSocket = require('socket.io-client');
// 	const ws = new WebSocket(url);
// 	const socket = require('socket.io-client')(url);

// 	ws.on('connect', () => {
//   		socket.emit('subscribe', 'firehose')
// 	})

// 	ws.on('message', function incoming(data) {
//   		console.log(data);
//   	});
// };


