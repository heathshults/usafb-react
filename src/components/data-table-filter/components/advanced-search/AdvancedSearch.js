import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const advancedSearch = () => (
  <button className="data-table-filter__button">
    <FontAwesome name="search" />
    <span className="data-table-filter__label">
      Advanced Search
    </span>
  </button>
);

advancedSearch.propTypes = {

};

export default advancedSearch;
