import React from 'react';
import PropTypes from 'prop-types';
import humanize from 'utils/transform';

const CoachInfo = props => (
  <div className="card-red player-info card-red-mspacing-top">
    <div className="card-red-body">
      {/* <p>
        <img src="../assets/profile/user-01.jpg" alt={`${this.props.coachData.name_first} ${this.props.coachData.name_last}`} className="user-avatar-red-md" />
      </p> */}
      <p className="theme-red-title">{props.coachData.name_first} {props.coachData.name_middle} {props.coachData.name_last}</p>
      <p>{props.coachData.gender} - {props.coachData.years_experience} years
        <div className="theme-red-padded-line">
          <div className="theme-red-badge">
            <strong>Coach ID: {humanize(props.coachData.id_external)}</strong>
          </div>
        </div>
        Certifications: {props.currentTeam.certifications}</p>
    </div>
  </div>
);

CoachInfo.propTypes = {
  currentTeam: PropTypes.object,
  coachData: PropTypes.shape({
    gender: PropTypes.string,
    name_first: PropTypes.string,
    name_middle: PropTypes.string,
    name_last: PropTypes.string,
    years_experience: PropTypes.number,
    graduation_year: PropTypes.string,
    sports: PropTypes.array,
    id_external: PropTypes.any,
    grade: PropTypes.any
  })
};

CoachInfo.defaultProps = {
  currentTeam: {},
  coachData: {
    gender: '',
    name_first: '',
    name_middle: '',
    name_last: '',
    years_experience: 0,
    graduation_year: '',
    sports: [],
    id_external: null,
    grade: null
  }
};

export default CoachInfo;
