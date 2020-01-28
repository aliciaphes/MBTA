import React from 'react';
import { StationSelectorUI } from './ui';
import PropTypes from 'prop-types';



class StationSelectorContainer extends React.Component {

  static propTypes = {
    options: PropTypes.array,
    setSelection: PropTypes.func
  };


  constructor(props) {
    super(props);
    this.onStationSelection = this.onStationSelection.bind(this);
    this.state = {
      selectedStation: null
    };
  }

  onStationSelection(event){
    const {setSelection} = this.props;
    this.setState({ selectedStation: event.target.value });
    setSelection(event.target.value);
  }



  render() {
    const {setSelection, options} = this.props;
    return <StationSelectorUI options={options}
                              onStationSelection={this.onStationSelection}
                              setSelection={setSelection}/>;
  }
}

export const StationSelector = StationSelectorContainer;
