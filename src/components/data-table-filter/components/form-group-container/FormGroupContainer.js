import React from 'react';
import PropTypes from 'prop-types';

const formGroupContainer = props => (
  <div className="container fluid">
    <form>
      {React.Children.map(props.children, child => child)}
    </form>
  </div>
);

formGroupContainer.propTypes = {
  children: PropTypes.array.isRequired
};

export default formGroupContainer;
