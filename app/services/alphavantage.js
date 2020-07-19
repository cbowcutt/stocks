var request = require('request');

var exports = module.exports = {};
var url = 'https://www.alphavantage.co/query';
exports.alphaVantageMethod = (func, symbol, key, callback) => {
  request({
    uri: url,
    method: 'GET',
    qs: {
      function: func,
      symbol: symbol,
      apikey: key
    }
  }, function(error, response, body) {
    if(error) {
      throw(error);
    }
    callback(body);
  })
};

exports.getTimeHistoryDaily = (symbol, key, callback) => {
  exports.alphaVantageMethod('TIME_SERIES_DAILY', symbol, key, function(body) {
    var unprocessed = JSON.parse(body)['Time Series (Daily)'];
    var data = exports.processTimeHistory(unprocessed);
    callback(data);
 });
};

exports.processTimeHistory = (history) => {
    var data = [];
    console.log(history);
    for(var date in history) {
      data.push({
        date: date,
        open: history[date]['1. open'],
        high: history[date]['2. high'],
        low: history[date]['3. low'],
        close: history[date]['4. close'],
        volume: history[date]['5. volume']
      })
    }
  return { "ticks": data };
};
