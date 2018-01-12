import React from 'react';
import PropTypes from 'prop-types';

const getButtonLabel = (importing) => {
  if (importing) {
    return (
      <div>
        <i className="fa fa-spinner fa-spin" />&nbsp; Importing...
      </div>
    );
  }

  return (
    <div>
      <i className="fa fa-upload" aria-hidden="true" />&nbsp; Import
    </div>
  );
};

const importButton = props => (
  <div className="col-4">
    <div className="d-flex h-100">
      <button
        className="btn btn-primary-02 ml-auto"
        onClick={props.toggle}
        disabled={props.importing}
      >
        {getButtonLabel(props.importing)}
      </button>
    </div>
  </div>
);

importButton.propTypes = {
  toggle: PropTypes.func.isRequired,
  importing: PropTypes.bool.isRequired
};

export default importButton;
