import React from 'react';
// import PropTypes from 'prop-types';

const status = () => (
  <div className="d-flex align-items-center mt-1 mb-1">
    <p className="m-0 profile__input-label">
      Status
    </p>
    <div className="profile__input-fieldanimate-checkbox">
      <input className="tgl tgl-skewed align-self-center" id="cbStatus" type="checkbox" />
      <label className="tgl-btn" data-tg-on="DISABLED" data-tg-off="ACTIVE" htmlFor="cbStatus" />
    </div>
  </div>
);

status.propTypes = {

};

export default status;
