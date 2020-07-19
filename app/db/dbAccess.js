var sqlite3 = require('sqlite3');
var exports = module.exports = {}

var path = './db/database.db';

exports.insertIntoSymbols = (pairs) => {
	var db = new sqlite3.Database(path);
	console.log(pairs);
	for(var i = 0; i < pairs.length; i++) {
		statement = "insert into companies (symbol, name) values (\""+pairs[i][0]+"\", \""+pairs[i][1]+"\");";
		console.log(statement);
		db.run(statement);
	}
	db.close();
}

exports.symbols = (callback) => {
	var db = new sqlite3.Database(path);
	db.all("select * from companies;", function(error, rows) {
		if(error) {
			throw(error);
		}
		callback(rows);
	})
	db.close();	
}

exports.getCompanyBySymbol = (symbol, callback) => {
	var db = new sqlite3.Database(path);
	db.all("select * from companies where symbol like $symbol ;", {
		$symbol: "%" + symbol + "%"
	}, function(error, rows) {
		if(error) {
			throw(error);
		}
		callback(rows);
	})
}
