import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {DateBlock} from './components/Date/container';
import {Clock} from './components/Clock/container';
import {StationSelector} from './components/StationSelector/container';
import {Table} from './components/Table/container';


const OPTIONS = [
  { value: 'place-north', label: 'North Station' },
  { value: 'place-sstat', label: 'South Station' }
];


export class App extends Component {

  constructor(props) {
    super(props);
    this.setSelection = this.setSelection.bind(this);
    this.state = {
      selectedStation: OPTIONS[0].value
    };
  }

  setSelection(selectedStation){
    this.setState({ selectedStation });
  }


  render() {
    const {selectedStation} = this.state;
    return (
      <div className="App">
        <h2>UPCOMING DEPARTURES</h2>
        <DateBlock/>
        <Clock/>
        <StationSelector options={OPTIONS} setSelection={this.setSelection}/>
        <Table selectedStation={selectedStation}/>
        <footer>
            <p>The app refreshes approximately every minute</p>
        </footer>
      </div>
    );
  }
}

export default App;
