import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Alert extends React.Component {
  render() {
    const { text, type } = this.props;
    return (
      <div className={`alert alert-${type}`} role="alert">
        {text}
      </div>
    );
  }
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]).isRequired
};

export default Alert;
