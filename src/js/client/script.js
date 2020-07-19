var $ = require('jquery');


$.ready(function() {
	$('div.tickdatacontainer')
})

function getTicks(stock_symbol, callback) {
	$.get('/ticks', JSON.stringify({ "symbol": stock_symbol}))
		.done(function(data) { return callback(data); });
};

function createTickDataTable(stock_symbol) {
	$("div.tickdata-" + stock_symbol).html("<table id='tickdatatable'></table>");
}

function appendTicks(ticks, stock_symbol) {
	var table = $("#tickdata-" + stock_symbol).find('.tickdatatable');
	for(var date in ticks) {
		var tick = ticks[date];
		table.append("<tr><td>date: "+tick.date+"</td><td> open: "+ tick.open +"</tr>");
	}
};