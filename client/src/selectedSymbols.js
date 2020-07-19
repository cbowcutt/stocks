import React from 'react';
import { getTicks } from './getTicks'

class SelectedSymbols {
	constructor(symbols) {
		this.symbols = [];
		this.ticks = {};
	}

	getTicksForSymbols() {
		Promise.All(this. symbols.map((symbol) => getTicks(symbol))
			.then((ticks) => this.symbols[symbol] = ticks));
	}
}