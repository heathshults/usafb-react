import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const refresh = () => (
  <button className="data-table-filter__button">
    <FontAwesome name="refresh" />
    <span className="data-table-filter__label">
      Refresh
    </span>
  </button>
);

refresh.propTypes = {

};

export default refresh;
