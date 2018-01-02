import React from 'react';
import PropTypes from 'prop-types';

const header = props => (
  <div className="col-4 page-title-container">
    <h1 className="page-title offset-top-10">
      <span className="offset-top-8 mr-2 text-white">
        <b>{props.header.toUpperCase()}</b>
      </span>
      <span className="font-xl text-white">
        <label id="numOfPlayers">{props.numberOfUsers}</label>
      </span>
    </h1>
  </div>
);

header.propTypes = {
  header: PropTypes.string.isRequired,
  numberOfUsers: PropTypes.number.isRequired
};

export default header;
