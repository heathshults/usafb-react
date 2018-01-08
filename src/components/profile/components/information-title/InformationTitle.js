import React from 'react';
import PropTypes from 'prop-types';

const InformationTitle = props => (
  <div className="card-red-header-special">
    <i id="editIcon" className="fa fa-edit float-right mt-1" aria-hidden="true" />
    {props.title} <strong>INFORMATION</strong>
  </div>
);

InformationTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default InformationTitle;
