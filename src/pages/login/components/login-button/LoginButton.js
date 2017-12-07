import React from 'react';
import PropTypes from 'prop-types';

const loginButton = props => (
  <div className="row pt-0 pb-0">
    <div className="col-md-12 pt-0 pb- text-center">
      <button
        type="submit"
        className="btn btn-primary w-75 mr-auto ml-auto"
        onClick={props.onClick}
      >
        Login
      </button>
    </div>
  </div>
);

loginButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default loginButton;
