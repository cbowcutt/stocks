var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/database.db');

db.run("CREATE TABLE companies (symbol TEXT PRIMARY KEY, name text); ");
db.close();