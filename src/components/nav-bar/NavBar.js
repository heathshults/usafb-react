import React, { Component } from 'react';
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
import MobileNavbar from './components/mobile-navbar/MobileNavbar';
import MobileNavbarContainer from './components/mobile-navbar-container/mobileNavbarContainer';

class navBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: false
    };
  }
  goToPlayers = () => this.props.history.push('/players');
  goToCoaches = () => this.props.history.push('/coaches');
  goToPlayersDashboard = () => this.props.history.push('/dashboard');
  goToCoachesDashboard = () => this.props.history.push('/dashboard');
  goToImports = type => this.props.history.push(`/imports/${type}`);
  logout = () => {
    window.localStorage.clear();
    window.location.href = '/login';
  };
  toggleNavbar = () => {
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  }

  render() {
    return (
      <span>
        {
          this.props.location.pathname === '/login' || !localStorage.getItem('access_token') ?
            <span /> :
            <span>
              <Container>
                <Logo />
                <NavigationContainer>
                  <NavLink to="/" label="Home" />
                  <Auth role_permissions={this.props.role_permissions} permissionRequested={[EXPORT_PLAYERS, VIEW_PLAYERS, IMPORT_PLAYERS]}>
                    <NavDropdown label="players">
                      <Auth role_permissions={this.props.role_permissions} permissionRequested={VIEW_PLAYERS}>
                        <NavDropdownItem label="Search" onClick={this.goToPlayers} />
                      </Auth>
                      <Auth role_permissions={this.props.role_permissions} permissionRequested={IMPORT_PLAYERS}>
                        <NavDropdownItem label="Import" onClick={() => this.goToImports('players')} />
                      </Auth>
                      {/* <Auth role_permissions={this.props.role_permissions} permissionRequested={EXPORT_PLAYERS}>
                        <NavDropdownItem label="Export" onClick={this.props.togglePlayerExportModalOn} />
                      </Auth> */}
                    </NavDropdown>
                  </Auth>
                  <Auth role_permissions={this.props.role_permissions} permissionRequested={[EXPORT_COACHES, VIEW_COACHES, IMPORT_COACHES]}>
                    <NavDropdown label="coaches">
                      <Auth role_permissions={this.props.role_permissions} permissionRequested={VIEW_COACHES}>
                        <NavDropdownItem label="Search" onClick={this.goToCoaches} />
                      </Auth>
                      <Auth role_permissions={this.props.role_permissions} permissionRequested={IMPORT_COACHES}>
                        <NavDropdownItem label="Import" onClick={() => this.goToImports('coaches')} />
                      </Auth>
                      {/* <Auth role_permissions={this.props.role_permissions} permissionRequested={EXPORT_COACHES}>
                        <NavDropdownItem label="Export" onClick={this.props.toggleCoachExportModalOn} />
                      </Auth> */}
                    </NavDropdown>
                  </Auth>
                  <Auth role_permissions={this.props.role_permissions} permissionRequested={VIEW_DASHBOARD}>
                    <NavDropdown label="Dashboard" hideSlash>
                      <NavDropdownItem label="Players" onClick={this.goToPlayersDashboard} />
                      <NavDropdownItem label="Coaches" onClick={this.goToCoachesDashboard} />
                    </NavDropdown>
                  </Auth>
                </NavigationContainer>
                <MobileNavbar toggleNavbar={this.toggleNavbar} />
                <UserDropdown
                  name={`${this.props.name_first} ${this.props.name_last}`}
                  logout={this.logout}
                  role_permissions={this.props.role_permissions}
                />
                <MobileNavbarContainer showNavbar={this.state.showNavbar} goToCoaches={this.goToCoaches} goToPlayers={this.goToPlayers} goToPlayersDashboard={this.goToPlayersDashboard} goToCoachesDashboard={this.goToCoachesDashboard} goToImports={this.goToImports} role_permissions={this.props.role_permissions} togglePlayerExportModalOn={this.props.togglePlayerExportModalOn} toggleCoachExportModalOn={this.props.toggleCoachExportModalOn} />
              </Container>
            </span>
        }
      </span>
    );
  }
}

navBar.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  togglePlayerExportModalOn: PropTypes.func.isRequired,
  toggleCoachExportModalOn: PropTypes.func.isRequired,
  role_permissions: PropTypes.array,
  name_last: PropTypes.string.isRequired,
  name_first: PropTypes.string.isRequired
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
