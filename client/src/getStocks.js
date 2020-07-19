import React from 'react';

const getStockBySymbol = (symbol, comp, callback) => {
	 fetch('/stocks?symbol=' + symbol)
    	.then(response => {
        	return response.json();
      	})
      	.then(json => {
      		callback(json, comp);
      })
}

const getStockByName = (name, callback) => {
	fetch('/stocks?name=' + name)
	    .then(response => {
        	return response.json();
      	})
      	.then(json => {
      		callback(json);
      })
}

export default { getStockByName, getStockBySymbol };