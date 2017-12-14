import React from 'react';
import PropTypes from 'prop-types';

import Filters from './components/filters/Filters';
import AdvancedSearch from './components/advanced-search/AdvancedSearch';
import Refresh from './components/refresh/Refresh';
import './data-table-filter.css';

const dataTableFilter = props => (
  <div className="row">
    <div className="col-md-12 btn-group data-table-filter">
      <Filters
        filters={props.filters}
        updateFilters={props.updateFilters}
        displayFilters={props.displayFilters}
        toggleFilters={props.toggleFilters}
      />
      <AdvancedSearch />
      <Refresh />
    </div>
  </div>
);

dataTableFilter.propTypes = {
  filters: PropTypes.array.isRequired,
  updateFilters: PropTypes.func.isRequired,
  displayFilters: PropTypes.bool.isRequired,
  toggleFilters: PropTypes.func.isRequired
};

export default dataTableFilter;
