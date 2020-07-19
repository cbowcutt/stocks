import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export class Ticks extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		"ticks": []
    	};
 	}

 	componentDidMount() {
 		fetch('/ticks/' + this.props.symbol)
    		.then(response => {
    			console.log('yo');
        		return response.json();
      		})
      		.then(json => {
        		const ticks = json.ticks;
        		this.setState({ ticks });
        		console.log(this.state.ticks);
      	})
 	}
 	
 	render() {
	    return (
	        <Table>
	        	<TableBody>
	        	{this.state.ticks.map(tick => 
	        		<TableRow>
	            		<TableRowColumn>{tick.date}</TableRowColumn>
	            		<TableRowColumn>{tick.open}</TableRowColumn>
	            		<TableRowColumn>{tick.close}</TableRowColumn>
	            	</TableRow>
	          	)}
	          	</TableBody>
	        </Table>
	    );
	}
}
