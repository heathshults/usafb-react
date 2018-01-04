import React from 'react';
import PropTypes from 'prop-types';

const getButtonLabel = (searching) => {
  if (searching) {
    return (
      <div>
        <i className="fa fa-spinner fa-spin" /> Searching...
      </div>
    );
  }

  return (
    <div>
      <i className="fa fa-user" aria-hidden="true" /> Search
    </div>
  );
};

const searchButton = props => (
  <div className="col-4">
    <div className="d-flex h-100">
      <button
        className="btn btn-primary-02 ml-auto"
        onClick={props.toggle}
      >
        {getButtonLabel(props.searching)}
      </button>
    </div>
  </div>
);

searchButton.propTypes = {
  toggle: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired
};

export default searchButton;

