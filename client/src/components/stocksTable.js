import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};



export class StocksTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
    		fixedHeader: true,
    		fixedFooter: true,
    		stripedRows: false,
    		showRowHover: false,
    		selectable: true,
    		multiSelectable: false,
    		enableSelectAll: false,
    		deselectOnClickaway: true,
    		showCheckboxes: true,
    		height: '200px',
  };
	}

	render() {
		return(
			<div>
				<Table
			        height={this.state.height}
          			fixedHeader={this.state.fixedHeader}
          			fixedFooter={this.state.fixedFooter}
          			selectable={this.state.selectable}
          		multiSelectable={this.state.multiSelectable}
          		>
					<TableHeader
            			displaySelectAll={this.state.showCheckboxes}
            			adjustForCheckbox={this.state.showCheckboxes}
        				enableSelectAll={this.state.enableSelectAll}
					>
						<TableRow>
							<TableHeaderColumn colSpan="1" tooltip="Super Header" style={{textAlign: 'center'}} />
						</TableRow>
						<TableRow>
							<TableHeaderColumn toolTip="Symbol">Symbol</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody
			            displayRowCheckbox={this.state.showCheckboxes}
            			deselectOnClickaway={this.state.deselectOnClickaway}
            			showRowHover={this.state.showRowHover}
            			stripedRows={this.state.stripedRows}
					>
					{
						this.props.stocks.map(stock =>
							<TableRow>
								<TableRowColumn>{stock.symbol}</TableRowColumn>
							</TableRow>
					)}
					</TableBody>
				</Table>
		 	</div>
		 )
	}
}