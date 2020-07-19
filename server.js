const express = require('express');
var alphavantage = require('./app/services/alphavantage');
var bodyparser = require('body-parser');
var http = require('http');
var key = process.env.ALPHAVANTAGE_KEY
var app = express();
var server = http.createServer(app);
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
require('./app/routes/ticksRoute')(app);
require('./app/routes/stocksRoute')(app);
server.listen(process.env.STOCKS_PORT, process.env.STOCKS_DOMAIN);
