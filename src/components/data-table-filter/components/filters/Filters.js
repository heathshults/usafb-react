import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const filters = () => (
  <button className="data-table-filter__button">
    <FontAwesome name="filter" />
    <span className="data-table-filter__label">
      Filters
    </span>
    <FontAwesome name="caret-down" />
  </button>
);

filters.propTypes = {

};

export default filters;
