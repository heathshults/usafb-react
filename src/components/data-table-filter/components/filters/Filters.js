import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const filters = () => (
  <button
    tabIndex={0} //eslint-disable-line
    className="data-table-filter__button"
    data-toggle="popover"
    data-trigger="focus"
    title="Dismissible popover"
    data-content="And here's some amazing content. It's very engaging. Right?"
  >
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
