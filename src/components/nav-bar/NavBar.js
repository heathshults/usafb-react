import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const navBar = (props) => {
  if (props.location.pathname === '/login') {
    return <div />;
  }

  return (
    <div>
      {JSON.stringify(props)}
    </div>
  );
};

navBar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(navBar);
