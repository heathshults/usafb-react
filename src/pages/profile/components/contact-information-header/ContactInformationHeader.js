import React from 'react';
import PropTypes from 'prop-types';
import './contact-information-header.css';

const contactInformationHeader = props => (
  <div className="d-flex justify-content-between align-items-center profile__contact-information-header">
    <h4 className="m-0">
      Contact Information
    </h4>
    <div>
      {props.editing &&
        <button className="profile__contact-information-header-edit mr-2" onClick={props.toggleEdit}>
          Cancel
        </button>
      }
      <button className="profile__contact-information-header-edit" onClick={props.editing ? props.saveChanges : props.toggleEdit}>
        <i
          id="editAvatarIcon"
          className="fa fa-edit action-button-icon"
          aria-hidden="true"
        />&nbsp;
        {props.editing ? 'Save' : 'Edit'}
      </button>
    </div>
  </div>
);

contactInformationHeader.propTypes = {
  toggleEdit: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  saveChanges: PropTypes.func.isRequired
};

export default contactInformationHeader;
