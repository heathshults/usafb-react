import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import uuidv4 from 'uuid/v4';
import { Popover, PopoverBody } from 'reactstrap';

import './filters.css';

const displayFilters = (filters, updateFilters) => (
  <ul className="data-table-filter__popover">
    {filters.map((filter) => {
      if (filter.label) {
        return (
          <li className="data-table-filter__checkbox" key={uuidv4()}>
            <label htmlFor={filter.label}>
              <input
                id={filter.label}
                type="checkbox"
                checked={filter.selected}
                onChange={() => updateFilters(filter)}
              />
              {filter.label}
            </label>
          </li>
        );
      }
      return <h5 key={uuidv4()} className="data-table-filter__category">{filter}</h5>;
    })}
  </ul>
);

const filters = props => (
  <div>
    <button
      tabIndex={0} //eslint-disable-line
      className="data-table-filter__button"
      id="filterPopoverButton"
      onClick={props.toggle}
    >
      <FontAwesome name="filter" />
      <span className="data-table-filter__label">
        Filters
        </span>
      <FontAwesome name="caret-down" />
    </button>
    <Popover
      placement="bottom"
      isOpen={props.display}
      target="filterPopoverButton"
      toggle={props.toggle}
    >
      <PopoverBody>
        {displayFilters(props.filters, props.updateFilters)}
      </PopoverBody>
    </Popover>
  </div>
);

filters.propTypes = {
  filters: PropTypes.array.isRequired,
  updateFilters: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default filters;
