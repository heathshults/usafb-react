import React from 'react';
import PropTypes from 'prop-types';

const buttonGroup = props => (
  <div className="col-4 text-right">
    <button
      id="btn-export"
      className="btn btn-primary-02 mr-2 text-white"
      data-toggle="modal"
      data-target="#create-u"
    >
      <i
        className="fa fa-cloud-download mr-1"
        aria-hidden="true"
      />
      EXPORT
    </button>
    <button
      id="btn-import"
      className="btn btn-primary-02 text-white"
      data-toggle="modal"
      data-target={`#${props.importModalID}`}
    >
      <i
        className="fa fa-cloud-upload mr-1"
        aria-hidden="true"
      />
      IMPORT
    </button>
  </div>
);

buttonGroup.propTypes = {
  importModalID: PropTypes.string.isRequired
};

export default buttonGroup;