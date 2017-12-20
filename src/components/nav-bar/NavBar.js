import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Container from './components/container/Container';

const navBar = (props) => {
  if (props.location.pathname === '/login') {
    return <div />;
  }

  return (
    <Container>
      {JSON.stringify(props)}
    </Container>
  );
};

navBar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(navBar);
