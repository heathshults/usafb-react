import React from 'react';
import PropTypes from 'prop-types';

const Organization = props => (
  <div className="card-red card-red-mspacing-top">
    <div className="card-red-header">
      <i id="editIcon" className="fa fa-edit float-right mt-1" aria-hidden="true" /> Team/
      <strong>Organization</strong>
    </div>
    <div className="card-red-body">
      <div className="theme-red-padded-line">
        <div className="theme-red-badge">LEAGUE: {props.currentTeam.id_external}</div>
      </div>

      <p className="pl-3">
        {props.currentTeam.team_name}
        <br /> {props.currentTeam.league_name}
      </p>
      <p className="pl-3 font-85">
        {props.currentTeam.school_state}, USA
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
    team_name: PropTypes.string,
    league_name: PropTypes.string,
    school_name: PropTypes.string,
    school_state: PropTypes.string,
    school_district: PropTypes.string,
    id_external: PropTypes.any
  })
};

Organization.defaultProps = {
  currentTeam: {
    team_name: '',
    league_name: '',
    school_name: '',
    school_state: '',
    school_district: '',
    id_external: null
  }
};

export default Organization;
