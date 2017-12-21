import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Container from './components/container/Container';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import Dropdown from './components/dropdown/Dropdown';

const navBar = (props) => {
  if (props.location.pathname === '/login') {
    return <div />;
  }

  return (
    <Container>
      <Logo />
      <Navigation />
      <Dropdown />
    </Container>
  );
};

navBar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(navBar);
