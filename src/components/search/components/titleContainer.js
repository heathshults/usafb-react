import React from 'react';
import PropTypes from 'prop-types';

const TitleContainer = props => (
  <span>
    <h4 className="card-header">SEARCH</h4>
    <div className="card-body form-group">
      <div className="column">
        {React.Children.map(props.children, child => child)}
      </div>
    </div>
  </span>
);

TitleContainer.propTypes = {
  children: PropTypes.array.isRequired,
};

export default TitleContainer;
