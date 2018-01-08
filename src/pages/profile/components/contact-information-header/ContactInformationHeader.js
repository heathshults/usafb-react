import React from 'react';
import PropTypes from 'prop-types';
import './contact-information-header.css';

const contactInformationHeader = props => (
  <div className="d-flex justify-content-between align-items-center profile__contact-information-header">
    <h4 className="m-0">
      Contact Information
    </h4>
    <button className="profile__contact-information-header-edit" onClick={props.toggleEdit}>
      <i
        id="editAvatarIcon"
        className="fa fa-edit action-button-icon"
        aria-hidden="true"
      />&nbsp;
      {props.editing ? 'Save' : 'Edit'}
    </button>
  </div>
);

contactInformationHeader.propTypes = {
  toggleEdit: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired
};

export default contactInformationHeader;
