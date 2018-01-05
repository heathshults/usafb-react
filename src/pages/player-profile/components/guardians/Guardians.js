import React from 'react';
import PropTypes from 'prop-types';

const Guardians = props => (
  <div className="card-red card-red-mspacing-top">
    {/* eslint-disable */}
    {props.playerData.guardians && props.playerData.guardians.map(guardian => (
      <span key={guardian._id}>
        <div className="card-red-header">
          <i id="editIcon" className="fa fa-edit float-right mt-1" ariaHidden="true" /> Parent/
    <strong>Guardian</strong>
        </div>
        <div className="card-red-body">
          <p>
            <a className="card-red-link-inverted" data-toggle="collapse" href="#collapseInfo1" aria-expanded="false" aria-controls="collapseExample">Parent: {guardian.name_first} {guardian.name_last}
              <i className="fa fa-chevron-down font-75 mt-2 float-right" />
            </a>
          </p>
          <div className="collapse indent" id="collapseInfo1">
            <p>
              <span>Mobile:</span> {guardian.phone_mobile}
              <br />
              <span>Home:</span> {guardian.phone_home}
              <br />
              <span>Work:</span> {guardian.phone_work}
              <br />
              <span>Email:</span>
              <a href="tel:333-333-3333" className="card-red-link">{guardian.email || 'N/A'}</a>
            </p>
          </div>
        </div>
      </span>
    ))}
  </div>
);

Guardians.propTypes = {
  playerData: PropTypes.shape({
    guardians: PropTypes.array
  })
};

Guardians.defaultProps = {
  playerData: {
    guardians: []
  }
};

export default Guardians;
