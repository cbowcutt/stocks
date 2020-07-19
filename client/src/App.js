import React, { Component } from 'react';
import { FilterableStocksTable } from './components/filterableStocksTable'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';


const searchFormStyle = {
  "margin-top": 5,
  "margin-left": 40,
  "padding-right": 20
}

const paperStyle = {
  "margin-top": 40,
  "margin-bottom": 40,
  "margin-left": 80,
  "margin-right": 80,
  "padding": 20
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {symbol: undefined, queryMode: "search"};

    this.symbolEntered = this.symbolEntered.bind(this);
    this.symbolSubmitted = this.symbolSubmitted.bind(this);
    this.filterButtonClicked = this.filterButtonClicked.bind(this);
  }

  filterButtonClicked(event) {
    this.setState({queryMode: "filter" });
  }

  symbolEntered(event) {
      //this.setState({ symbol: event.target.value });
  }

  symbolSubmitted(event) {
    event.preventDefault();
  };



  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <AppBar title="Search For Stocks" />
              
            <Paper style={paperStyle}>


              <Divider/>
              <FilterableStocksTable />
            </Paper>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
