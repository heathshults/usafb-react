import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Container from './components/container/Container';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';

const navBar = (props) => {
  if (props.location.pathname === '/login') {
    return <div />;
  }

  return (
    <Container>
      <Logo />
      <Navigation />
    </Container>
  );
};

navBar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(navBar);
