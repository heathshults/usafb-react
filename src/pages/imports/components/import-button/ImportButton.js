import React from 'react';
import PropTypes from 'prop-types';

const importButton = props => (
  <div className="col-4">
    <div className="d-flex h-100">
      <button
        className="btn btn-primary-02 ml-auto"
        onClick={props.toggle}
      >
        Import
      </button>
    </div>
  </div>
);

importButton.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default importButton;
