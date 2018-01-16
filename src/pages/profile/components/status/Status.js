import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-toggle-button';


const status = props => (
  <div className="d-flex align-items-center mt-1 mb-1">
    <p className="m-0 profile__input-label">
      Status {props.active}
    </p>
    <div className="profile__input-field">
      <ToggleButton
        value={props.active}
        onToggle={props.onChange}
      />
    </div>
  </div>
);

status.propTypes = {
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default status;
