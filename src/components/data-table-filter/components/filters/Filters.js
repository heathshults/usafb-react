import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './filters.css';

const filters = () => (
  <button className="data-table-filter__button">
    <FontAwesome name="filter" />
    <span className="data-table-filter__filter-label">
      Filters
    </span>
    <FontAwesome name="caret-down" />
  </button>
);

filters.propTypes = {

};

export default filters;
