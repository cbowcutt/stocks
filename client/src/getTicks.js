import React from 'react';

const getTicks = (symbol callback) => {
    	.then(response => {
        	return response.json();
      	})
      	.then(json => {
      		callback(json, comp);
      })
};

export default { getTicks };