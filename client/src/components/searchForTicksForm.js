import React, { Component } from 'react';



class SearchForTicksForm extends Component {
	constructor(props) {
    	super(props);
    	this.state = {value: ''}
  	}

  	render() {
  		return (
  			<form onSubmit={this.props.handleSubmit}>
  				<label>
  					<input type="text" value={this.state.value} onChange={this.props.handleChange} />
  				</label>
  			</form>
  		)
  	}
}