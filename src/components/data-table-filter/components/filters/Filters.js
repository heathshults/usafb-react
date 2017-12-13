/* global $ */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './filters.css';

const filters = (props) => {
  const displayFilters = () => (
    <div className="data-table-filter">
      {props.filters.map(filter => (
        <div key={filter.category}>
          <h5 className="data-table-filter__category">
            {filter.category}
          </h5>
        </div>
      ))}
    </div>
  );

  $(function () {
    $('[data-filter-toggle="popover"]').popover({
      html: true,
      content: ReactDOMServer.renderToString(displayFilters())
    });
  });

  return (
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
};

filters.propTypes = {
  filters: PropTypes.array.isRequired
};

export default filters;
