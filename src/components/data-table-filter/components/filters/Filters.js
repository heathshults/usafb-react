/* global $ */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const displayFilters = () => (
  <div>
    Testing 123
  </div>
);

$(function () {
  $('[data-filter-toggle="popover"]').popover({
    html: true,
    content: ReactDOMServer.renderToString(displayFilters())
  });
});

const filters = () => (
  <div>
    <button
      tabIndex={0} //eslint-disable-line
      className="data-table-filter__button"
      data-container="body"
      data-filter-toggle="popover"
      data-trigger="focus"
      data-placement="bottom"
      data-html="true"
    >
      <FontAwesome name="filter" />
      <span className="data-table-filter__label">
        Filters
    </span>
      <FontAwesome name="caret-down" />
    </button>
  </div>
);

filters.propTypes = {

};

export default filters;
