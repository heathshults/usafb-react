import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Container from './components/container/Container';
import Logo from './components/logo/Logo';
import NavigationContainer from './components/navigation-container/NavigationContainer';
import NavDropdown from './components/nav-dropdown/NavDropdown';
import NavDropdownItem from './components/nav-dropdown-item/NavDropdownItem';
import NavLink from './components/nav-link/NavLink';
import UserDropdown from './components/user-dropdown/UserDropdown';

const navBar = (props) => {
  if (props.location.pathname === '/login') {
    return <div />;
  }

  const goToPlayers = () => props.history.push('/players');
  const goToCoaches = () => props.history.push('/coaches');

  return (
    <Container>
      <Logo />
      <NavigationContainer>
        <NavLink to="/" label="Home" />
        <NavDropdown label="players">
          <NavDropdownItem label="The Players" onClick={goToPlayers} />
          <NavDropdownItem label="Import Players" onClick={() => { }} />
          <NavDropdownItem label="Export To File" onClick={() => { }} />
        </NavDropdown>
        <NavDropdown label="coaches">
          <NavDropdownItem label="The Coaches" onClick={goToCoaches} />
          <NavDropdownItem label="Import Coaches" onClick={() => { }} />
          <NavDropdownItem label="Export To File" onClick={() => { }} />
        </NavDropdown>
        <NavLink to="/dashboard" label="Dashboard" />
      </NavigationContainer>
      <UserDropdown />
    </Container>
  );
};

navBar.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(navBar);
