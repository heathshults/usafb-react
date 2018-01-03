import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = props => (
  <div className="row">
    <div className="input-group">
      <button type="button" className="bss-btn btn-primary-02" id="btnSearch" onClick={props.clearSearchFilters}>
        Clear Search
      </button>
    </div>
  </div>
);

ClearButton.propTypes = {
  clearSearchFilters: PropTypes.func.isRequired
};

export default ClearButton;
