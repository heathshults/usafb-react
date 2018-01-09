import React from 'react';
import PropTypes from 'prop-types';
// import './PlayerInfo.css';

const PlayerInfo = props => (
  <div className="card-red player-info card-red-mspacing-top">
    <div className="card-red-body">
      {/* <p>
        <img src="assets/profile/user-01.jpg" alt={`${this.props.playerData.name_first} ${this.props.playerData.name_last}`} className="user-avatar-red-md" />
      </p> */}
      <p className="theme-red-title">{props.playerData.name_first} {props.playerData.name_last}</p>
      <p className="playerInfo-sidebarText">{props.playerData.gender} - {props.playerData.years_experience} years - {props.playerData.graduation_year} - {props.playerData.grade}th Grade</p>
      <br /> {props.currentTeam.school_name} - {props.currentTeam.school_state} {props.playerData.graduation_year}
      <br /> Other Sports: {
        props.playerData.sports && props.playerData.sports.map(sport => `${sport} `)
      }
      <div className="theme-red-padded-line">
        <div className="theme-red-badge">
          <strong>Player ID: {props.playerData.id_external}</strong>
        </div>
      </div>
      <p className="playerInfo-sidebarText">Position: {props.currentTeam.positions && props.currentTeam.positions.map(position => `${position}, `)}</p>
    </div>
  </div>
);

PlayerInfo.propTypes = {
  currentTeam: PropTypes.object,
  playerData: PropTypes.shape({
    gender: PropTypes.string,
    name_first: PropTypes.string,
    name_last: PropTypes.string,
    years_experience: PropTypes.number,
    graduation_year: PropTypes.number,
    sports: PropTypes.array,
    id_external: PropTypes.any,
    grade: PropTypes.any
  })
};

PlayerInfo.defaultProps = {
  currentTeam: {},
  playerData: {
    gender: '',
    name_first: '',
    name_last: '',
    years_experience: 0,
    graduation_year: 2020,
    sports: [],
    id_external: null,
    grade: null
  }
};

export default PlayerInfo;
