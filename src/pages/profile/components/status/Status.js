import React from 'react';
import PropTypes from 'prop-types';
// import ToggleButton from 'react-toggle-button';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './status.css';

const status = props => (
  <div className="d-flex align-items-center mt-1 mb-1">
    <p className="m-0 profile__input-label">
      Status
    </p>
    <div className="profile__status profile__input-field">
      <span>
        {props.active ? 'ACTIVE' : 'DISABLED'}
      </span>
      <Toggle
        defaultChecked={props.active}
        onChange={props.onChange}
      />
    </div>
  </div>
);

status.propTypes = {
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default status;
