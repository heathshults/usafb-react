/* global $ */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import uuidv4 from 'uuid/v4';

import './filters.css';

const filters = (props) => {
  const displayFilters = () => (
    <ul className="data-table-filter__popover">
      {props.filters.map((filter) => {
        if (filter.label) {
          return (
            <li className="data-table-filter__checkbox" key={uuidv4()}>
              <label htmlFor={filter.label}>
                <input id={filter.label} type="checkbox" checked={filter.selected} />
                {filter.label}
              </label>
            </li>
          );
        }
        return <h5 key={uuidv4()} className="data-table-filter__category">{filter}</h5>;
      })}
    </ul>
  );

  $(function () {
    $('[data-filter-toggle="popover"]').popover({
      html: true,
      content: ReactDOMServer.renderToString(displayFilters()),
      container: 'body',
      placement: 'bottom'
    });
  });

  return (
    <div>
      <button
        tabIndex={0} //eslint-disable-line
        className="data-table-filter__button"
        data-filter-toggle="popover"
        data-trigger="click"
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
