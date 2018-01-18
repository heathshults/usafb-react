import React from 'react';
import PropTypes from 'prop-types';
import permissionCheck from 'utils/permission';

const Auth = props => (
  <span>
    {
      permissionCheck(props.role_permissions, props.permissionRequested) &&
      React.Children.map(props.children, child => child)
    }
  </span>
);

Auth.propTypes = {
  role_permissions: PropTypes.array.isRequired,
  permissionRequested: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired
};

export default Auth;
