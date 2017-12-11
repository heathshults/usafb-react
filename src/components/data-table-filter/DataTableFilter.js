import React from 'react';
// import PropTypes from 'prop-types';

import Filters from './components/filters/Filters';
import './data-table-filter.css';

const dataTableFilter = () => (
  <div className="btn-group">
    <Filters />
  </div>
);

dataTableFilter.propTypes = {

};

export default dataTableFilter;
