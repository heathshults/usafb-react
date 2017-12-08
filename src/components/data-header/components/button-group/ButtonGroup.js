import React from 'react';
// import PropTypes from 'prop-types';

const buttonGroup = () => (
  <div className="col-4 text-right">
    <a id="btn-export" className="btn btn-primary-02 mr-2 text-white" data-toggle="modal" data-target="#create-u">
      <i className="fa fa-cloud-download mr-1" aria-hidden="true" /> EXPORT</a>
    <a id="btn-import" className="btn btn-primary-02 text-white" ata-toggle="modal" ata-target="#importer">
      <i className="fa fa-cloud-upload mr-1" aria-hidden="true" /> IMPORT</a>
  </div>
);

export default buttonGroup;
