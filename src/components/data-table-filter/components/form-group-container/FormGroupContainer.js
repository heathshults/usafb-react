import React from 'react';
import PropTypes from 'prop-types';

import './form-group-container.css';

const formGroupContainer = props => (
  <div className="container-fluid from-group-container">
    <form>
      {React.Children.map(props.children, child => child)}
      <div className="form-group">
        <div className="col-sm-offset-9 col-sm-3" />
      </div>
    </form>
  </div>
);

formGroupContainer.propTypes = {
  children: PropTypes.array.isRequired
};

export default formGroupContainer;
