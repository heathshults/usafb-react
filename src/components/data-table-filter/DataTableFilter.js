import React from 'react';
// import PropTypes from 'prop-types';

import Filters from './components/filters/Filters';
import AdvancedSearch from './components/advanced-search/AdvancedSearch';
import Refresh from './components/refresh/Refresh';
import './data-table-filter.css';

const dataTableFilter = () => (
  <div className="row">
    <div className="col-md-12 btn-group data-table-filter">
      <Filters />
      <AdvancedSearch />
      <Refresh />
    </div>
  </div>
);

dataTableFilter.propTypes = {

};

export default dataTableFilter;
