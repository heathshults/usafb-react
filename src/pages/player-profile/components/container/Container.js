import React from 'react';
import PropTypes from 'prop-types';

const container = props => (
  <div className="red-theme full-screen-bg-profiles-red">
    <section id="main-content" className="container-fluid container-flexi-fluid section-main-content">
      <div className="row align-items-stretch">
        <div className="col-12">
          <div className="container container-flexi h-100">
            <div className="row card-theme-red align-items-stretch h-100">
              {React.Children.map(props.children, child => child)}
            </div>
          </div>
        </div>
      </div>
    </section >
  </div >
);

container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default container;
