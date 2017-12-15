import React from 'react';
import PropTypes from 'prop-types';

import Label from './components/label/Label';

const pagination = props => (
  <div className="row d-flex justify-content-between">
    <Label
      currentPage={props.currentPage}
      totalItems={props.totalItems}
    />
  </div>
);

pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default pagination;
