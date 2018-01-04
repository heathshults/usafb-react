import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = props => (
  <div id="s-o" className="search-overlay flexi-container align-items-stretch">
    <div id="s-f" className="flexi-container align-items-center mx-auto">
      <div className="search-form card-theme-blue m-auto">
        <div id="sForm" className="card">
          {React.Children.map(props.children, child => child)}
        </div>
      </div>
    </div>
  </div>
);

InputContainer.propTypes = {
  children: PropTypes.array.isRequired,
};

export default InputContainer;
