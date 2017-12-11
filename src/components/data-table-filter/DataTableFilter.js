import React from 'react';
// import PropTypes from 'prop-types';

import Filters from './components/filters/Filters';
import AdvancedSearch from './components/advanced-search/AdvancedSearch';
import Refresh from './components/refresh/Refresh';
import './data-table-filter.css';

const dataTableFilter = () => (
  <div className="btn-group data-table-filter">
    <Filters />
    <AdvancedSearch />
    <Refresh />
  </div>
);

dataTableFilter.propTypes = {

};

export default dataTableFilter;
