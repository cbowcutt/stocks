var db = require('../db/dbAccess.js');
module.exports = (app) => {
	app.get('/stocks', function(req, res) {
		var stocks = [];
		if(req.query.symbol) {
			console.log(req.query.symbol);
			db.getCompanyBySymbol(req.query.symbol, function(rows) {
				res.send(JSON.stringify(rows));
			})
		}
		else {
			db.symbols(function(rows) {
				res.send(JSON.stringify(rows));
				return;
			})
		}

	});
};