import React from 'react';
import PropTypes from 'prop-types';
import './contact-information-header.css';

const getLabel = (editing, saving) => {
  if (editing) {
    return (
      <span>
        <i
          id="editAvatarIcon"
          className="fa fa-edit action-button-icon"
          aria-hidden="true"
        />&nbsp;
        Save
      </span>
    );
  }

  if (saving) {
    return (
      <span>
        <i className="fa fa-spinner fa-spin" />&nbsp;
        saving...
      </span>
    );
  }

  return (
    <span>
      <i
        id="editAvatarIcon"
        className="fa fa-edit action-button-icon"
        aria-hidden="true"
      />&nbsp;
      Edit
    </span>
  );
};

const contactInformationHeader = props => (
  <div className="d-flex justify-content-between align-items-center profile__contact-information-header">
    <h4 className="m-0">
      Contact Information
    </h4>
    <div>
      {props.editing &&
        <button className="profile__contact-information-header-edit mr-2" onClick={props.cancelEdit}>
          Cancel
        </button>
      }
      <button
        className="profile__contact-information-header-edit"
        onClick={props.editing ? props.saveChanges : props.toggleEdit}
        disabled={props.saving}
      >
        {getLabel(props.editing, props.saving)}
      </button>
    </div>
  </div>
);

contactInformationHeader.propTypes = {
  toggleEdit: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  saveChanges: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired
};

export default contactInformationHeader;
