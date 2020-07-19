import React, { Component } from 'react';

import { Ticks } from './ticks';

class SelectedStocks extends Component {
	constructor() {
		super(props);
		this.state = {
			symbols: new Set();
		}
	}

	addStock(symbol) {
		this.setState({ symbols: new Set([this.state.symbols,new Set(symbol)])});

	}
	this.removeStock(symbol) {
		var symbols = this.state.symbols;
		symbols.delete(symbol);
		this.setState({ symbols: symbol });
	}

	render() {
		return(<div></div>)
	}
} 