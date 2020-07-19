import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class StocksSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: false,
			symbolValue: undefined,
			companyValue: undefined
		}
		this.handleSymbolInput = this.props.handleSymbolInput;
		this.handleCompanyInput = this.props.handleCompanyInput;
	}

	render() {
		return (
			<div>
			{
				this.state.filter == false &&
				<div>
					<TextField hintText="find by symbol" onChange={this.props.handleSymbolInput} />
					<TextField hintText="find by company name" onChange={this.props.handleCompanyInput} />
				</div>	                
	        }
            {
				this.state.filter == true && 
				<div>
					<TextField hintText="something here" />
					<TextField hintText="something else"/>
				</div>
            }
            	<RaisedButton label="Filter" primary={true} style={{margin: 12}} onClick={this.filterButtonClicked} />
            </div>
		)
	}
}