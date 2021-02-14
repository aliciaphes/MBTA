import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';


export class ErrorMessageUI extends React.Component {

  static propTypes = {
      errorMessage: PropTypes.string
  };

  render() {
    const {errorMessage} = this.props;
    return (
      <Alert variant="danger">
        {errorMessage}
      </Alert>
    );
  }

}
