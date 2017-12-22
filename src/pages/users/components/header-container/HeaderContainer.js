import React from 'react';
import PropTypes from 'prop-types';

const container = props => (
  <div className="row">
    <div className="col-12">
      <div className="row d-flex align-items-center">
        {React.Children.map(props.children, child => child)}
      </div>
    </div>
  </div>
);

container.propTypes = {
  children: PropTypes.array.isRequired
};

export default container;
