import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Auth from 'hoc/auth/Auth';

import { OPEN_PLAYER_EXPORT_MODAL, OPEN_COACH_EXPORT_MODAL } from 'pages/app/dux/actions';
import { EXPORT_PLAYERS, EXPORT_COACHES, IMPORT_PLAYERS, IMPORT_COACHES, VIEW_PLAYERS, VIEW_COACHES, VIEW_DASHBOARD } from 'services/permissions/permissions';

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
  const goToImports = type => props.history.push(`/imports/${type}`);

  const logout = () => {
    window.localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <Container>
      <Logo />
      <NavigationContainer>
        <NavLink to="/" label="Home" />
        <Auth role_permissions={props.role_permissions} permissionRequested={[EXPORT_PLAYERS, VIEW_PLAYERS, IMPORT_PLAYERS]}>
          <NavDropdown label="players">
            <Auth role_permissions={props.role_permissions} permissionRequested={VIEW_PLAYERS}>
              <NavDropdownItem label="Search" onClick={goToPlayers} />
            </Auth>
            <Auth role_permissions={props.role_permissions} permissionRequested={IMPORT_PLAYERS}>
              <NavDropdownItem label="Import" onClick={() => goToImports('players')} />
            </Auth>
            <Auth role_permissions={props.role_permissions} permissionRequested={EXPORT_PLAYERS}>
              <NavDropdownItem label="Export" onClick={props.togglePlayerExportModalOn} />
            </Auth>
          </NavDropdown>
        </Auth>
        <Auth role_permissions={props.role_permissions} permissionRequested={[EXPORT_COACHES, VIEW_COACHES, IMPORT_COACHES]}>
          <NavDropdown label="coaches">
            <Auth role_permissions={props.role_permissions} permissionRequested={VIEW_COACHES}>
              <NavDropdownItem label="Search" onClick={goToCoaches} />
            </Auth>
            <Auth role_permissions={props.role_permissions} permissionRequested={IMPORT_COACHES}>
              <NavDropdownItem label="Import" onClick={() => goToImports('coaches')} />
            </Auth>
            <Auth role_permissions={props.role_permissions} permissionRequested={EXPORT_COACHES}>
              <NavDropdownItem label="Export" onClick={props.toggleCoachExportModalOn} />
            </Auth>
          </NavDropdown>
        </Auth>
        <Auth role_permissions={props.role_permissions} permissionRequested={VIEW_DASHBOARD}>
          <NavDropdown label="Dashboard" hideSlash>
            <NavDropdownItem label="Players" onClick={goToPlayersDashboard} />
            <NavDropdownItem label="Coaches" onClick={goToCoachesDashboard} />
          </NavDropdown>
        </Auth>
      </NavigationContainer>
      <UserDropdown logout={logout} role_permissions={props.role_permissions} />
    </Container>
  );
};

navBar.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  togglePlayerExportModalOn: PropTypes.func.isRequired,
  toggleCoachExportModalOn: PropTypes.func.isRequired,
  role_permissions: PropTypes.array
};

navBar.defaultProps = {
  role_permissions: []
};

const mapStateToProps = state => ({
  ...state.userInformation,
  ...state.appReducer
});
const mapDispatchToProps = dispatch => ({
  togglePlayerExportModalOn: () => dispatch({ type: OPEN_PLAYER_EXPORT_MODAL }),
  toggleCoachExportModalOn: () => dispatch({ type: OPEN_COACH_EXPORT_MODAL })
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(navBar));
