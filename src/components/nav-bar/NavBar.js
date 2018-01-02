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

const test = () => console.log("testing"); //eslint-disable-line

const navBar = (props) => {
  if (props.location.pathname === '/login') {
    return <div />;
  }

  return (
    <Container>
      <Logo />
      <NavigationContainer>
        <NavLink to="/" label="Home" />
        <NavLink to="/players" label="Players" />
        <NavDropdown label="players">
          <NavDropdownItem label="The Players" onClick={test} />
          <NavDropdownItem label="Import Players" onClick={test} />
        </NavDropdown>
        <NavLink to="/coaches" label="Coaches" />
        <NavLink to="/dashboard" label="Dashboard" />
      </NavigationContainer>
      <UserDropdown />
    </Container>
  );
};

navBar.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(navBar);
