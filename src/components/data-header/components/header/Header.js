import React from 'react';
import PropTypes from 'prop-types';

const header = props => (
  <div className="col-4 page-title-container">
    <h1 className="page-title offset-top-10">
      <span className="offset-top-8 mr-2">
        <b>NUMBER OF {props.userType.toUpperCase()}</b>
      </span>
      <span className="font-xl">
        <label id="numOfPlayers">{props.numberOfUsers}</label>
      </span>
    </h1>
  </div>
);

header.propTypes = {
  userType: PropTypes.string.isRequired,
  numberOfUsers: PropTypes.number.isRequired
};

export default header;
