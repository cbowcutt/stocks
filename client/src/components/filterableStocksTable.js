import React, { Component } from 'react';
import { StocksSearch } from './stocksSearch';
import { StocksTable } from './stocksTable';
import getStocks from '../getStocks';

export class FilterableStocksTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			symbol: undefined,
			name: undefined,
			stocks: undefined
		}
		this.handleSymbolInput = this.handleSymbolInput.bind(this);
		this.handleCompanyInput = this.handleCompanyInput.bind(this);
	}

	handleSymbolInput(event) {
		if(event.target.value.length >= 2 && event.target.value != this.state.symbol) {
			this.setState({ 
				symbol: event.target.value,
				company: undefined
			 });
		}
	}

	handleCompanyInput(event) {
		if(event.target.value.length >= 3 && event.target.value != this.state.company) {
			this.setState({ 
				company: event.target.value,
				symbol: undefined
			});
		}
	}

	componentWillUpdate(event) {
		if(this.state.symbol) {
			console.log("yo")
			getStocks.getStockBySymbol(this.state.symbol, this,  function(stocks, comp) {
				comp.setState({
					symbol: undefined,
					name: undefined,
					stocks: stocks
				});
			});
		}	
	}

	componentDidMount() {
 	}

 	render() {
 		return(
	      	<div>
	      		<StocksSearch
	      			handleSymbolInput={this.handleSymbolInput}
	      			handleCompanyInput={this.handleCompanyInput}
	      		/>
	      	{
	      		this.state.stocks && <StocksTable stocks={this.state.stocks} />
	      	}
	        </div>
		)
 	}
}














