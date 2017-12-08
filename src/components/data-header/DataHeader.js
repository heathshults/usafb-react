import React from 'react';
import PropTypes from 'prop-types';

const dataHeader = props => (
  <div className="row">
    <div className="col-12 pt-3">
      <div className="row align-items-center">
        <div className="col-4 page-title-container">
          <h1 className="page-title offset-top-10">
            <span className="offset-top-8 mr-2">
              <b>NUMBER OF {props.userType.toUpperCase()}</b>
            </span>
            <span className="font-xl">
              <label id="numOfPlayers">{props.numberOfUsers}</label>
            </span>
          </h1>
        </div>
        <div className="col-4">
          <div className="alert alert-info alert-dismissible fade show" hidden role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button>
            <h5>Form Message Box </h5>
            <p>Shows messages after editing the information in the grid below.
                </p>
          </div>
        </div>
        <div className="col-4 text-right">
          <a id="btn-export" className="btn btn-primary-02 mr-2 text-white" data-toggle="modal" data-target="#create-u">
            <i className="fa fa-cloud-download mr-1" aria-hidden="true" /> EXPORT</a>
          <a id="btn-import" className="btn btn-primary-02 text-white" ata-toggle="modal" ata-target="#importer">
            <i className="fa fa-cloud-upload mr-1" aria-hidden="true" /> IMPORT</a>
        </div>
      </div>
    </div>
  </div>
);

dataHeader.propTypes = {
  userType: PropTypes.string.isRequired,
  numberOfUsers: PropTypes.number.isRequired
  // export: PropTypes.func.isRequired,
  // import: PropTypes.func.isRequired,
};

export default dataHeader;
