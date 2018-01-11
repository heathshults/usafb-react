import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { OPEN_PLAYER_EXPORT_MODAL, OPEN_COACH_EXPORT_MODAL } from 'pages/app/dux/actions';

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
  const goToPlayersDashboard = () => props.history.push('/dashboard');
  const goToCoachesDashboard = () => props.history.push('/dashboard');

  const logout = () => {
    window.localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <Container>
      <Logo />
      <NavigationContainer>
        <NavLink to="/" label="Home" />
        <NavDropdown label="players">
          <NavDropdownItem label="Search Players" onClick={goToPlayers} />
          <NavDropdownItem label="Import Players" onClick={() => { }} />
          <NavDropdownItem label="Export To File" onClick={props.togglePlayerExportModalOn} />
        </NavDropdown>
        <NavDropdown label="coaches">
          <NavDropdownItem label="Search Coaches" onClick={goToCoaches} />
          <NavDropdownItem label="Import Coaches" onClick={() => { }} />
          <NavDropdownItem label="Export To File" onClick={props.toggleCoachExportModalOn} />
        </NavDropdown>
        <NavDropdown label="Dashboard">
          <NavDropdownItem label="Players" onClick={goToPlayersDashboard} />
          <NavDropdownItem label="Coaches" onClick={goToCoachesDashboard} />
        </NavDropdown>
      </NavigationContainer>
      <UserDropdown logout={logout} />
    </Container>
  );
};

navBar.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  togglePlayerExportModalOn: PropTypes.func.isRequired,
  toggleCoachExportModalOn: PropTypes.func.isRequired
};

const mapStateToProps = ({ appReducer }) => appReducer;
const mapDispatchToProps = dispatch => ({
  togglePlayerExportModalOn: () => dispatch({ type: OPEN_PLAYER_EXPORT_MODAL }),
  toggleCoachExportModalOn: () => dispatch({ type: OPEN_COACH_EXPORT_MODAL })
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(navBar));
