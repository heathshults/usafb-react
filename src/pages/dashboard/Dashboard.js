import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const iframeUrl = this.props.location.pathname.includes('coaches') ? process.env.REACT_APP_PERISCOPE_COACH_DASHBOARD_URL : process.env.REACT_APP_PERISCOPE_PLAYER_DASHBOARD_URL;
    console.log('iframeUrl', iframeUrl); //eslint-disable-line
    return (
      <section id="main-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                title="periscope"
                id="statsFrame"
                src={iframeUrl}
                width="100%"
                height="2000"
                frameBorder="0"
                className="if-height"
                scroll="no"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

dashboard.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};
