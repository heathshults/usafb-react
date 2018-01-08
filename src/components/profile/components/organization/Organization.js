import React from 'react';
import PropTypes from 'prop-types';

const Organization = props => (
  <div className="card-red card-red-mspacing-top">
    <div className="card-red-header">
      <i id="editIcon" className="fa fa-edit float-right mt-1" aria-hidden="true" /> TEAM/
      <strong>ORGANIZATION</strong>
    </div>
    <div className="card-red-body">
      <div className="theme-red-padded-line">
        <div className="theme-red-badge">LEAGUE: {props.currentTeam.id_external}</div>
      </div>

      <p className="pl-3">
        {props.currentTeam.name}
        <br /> {props.currentTeam.league_name}
      </p>
      <p className="pl-3 font-85">
        {props.currentTeam.organization_state}, USA
        <br />
        <span>School:</span> {props.currentTeam.school_name}
        <br />
        <span>District:</span> {props.currentTeam.school_district}
      </p>
    </div>
  </div>
);

Organization.propTypes = {
  currentTeam: PropTypes.shape({
    name: PropTypes.string,
    league_name: PropTypes.string,
    school_name: PropTypes.string,
    school_state: PropTypes.string,
    school_district: PropTypes.string,
    id_external: PropTypes.any,
    organization_state: PropTypes.string
  })
};

Organization.defaultProps = {
  currentTeam: {
    name: '',
    league_name: '',
    school_name: '',
    school_state: '',
    school_district: '',
    id_external: null,
    organization_state: ''
  }
};

export default Organization;
