import React from 'react';
import PropTypes from 'prop-types';
import hasPermissions from 'services/permissions/hasPermissions';

const Auth = props => (
  <span>
    {
      hasPermissions(props.role_permissions, props.permissionRequested) &&
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
