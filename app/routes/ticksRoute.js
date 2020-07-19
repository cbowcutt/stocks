var alphavantage = require('../services/alphavantage');
module.exports = function(app) {
	app.get('/ticks/:symbol', function(req, res) {
	alphavantage.getTimeHistoryDaily(req.params.symbol, '73A7LVFI5GN2JU8P', function(data) {
		console.log(data);
		//res.render('ticks_table', { symbol: req.params.symbol, ticks: data})
		})
	});
};