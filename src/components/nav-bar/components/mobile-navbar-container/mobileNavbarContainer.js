import React from 'react';
import PropTypes from 'prop-types';
import Auth from 'hoc/auth/Auth';
import { EXPORT_PLAYERS, EXPORT_COACHES, IMPORT_PLAYERS, IMPORT_COACHES, VIEW_PLAYERS, VIEW_COACHES, VIEW_DASHBOARD } from 'services/permissions/permissions';

import MobileNavigationContainer from '../mobile-navigation-container/MobileNavigationContainer';
import NavDropdown from '../nav-dropdown/NavDropdown';
import NavDropdownItem from '../nav-dropdown-item/NavDropdownItem';
import NavLink from '../nav-link/NavLink';
import './mobileNavbarContainer.css';

const mobileNavbarContainer = props => (
  <div className={`nav-bar column mobileNavbarContainer ${props.showNavbar && 'mobileNavbarContainer-expanded'}`}>
    <MobileNavigationContainer>
      <NavLink to="/" label="Home" hideSlash />
      <Auth role_permissions={props.role_permissions} permissionRequested={[EXPORT_PLAYERS, VIEW_PLAYERS, IMPORT_PLAYERS]}>
        <NavDropdown label="players" hideSlash>
          <Auth role_permissions={props.role_permissions} permissionRequested={VIEW_PLAYERS}>
            <NavDropdownItem label="Search" onClick={props.goToPlayers} />
          </Auth>
          <Auth role_permissions={props.role_permissions} permissionRequested={IMPORT_PLAYERS}>
            <NavDropdownItem label="Import" onClick={() => props.goToImports('players')} />
          </Auth>
          <Auth role_permissions={props.role_permissions} permissionRequested={EXPORT_PLAYERS}>
            <NavDropdownItem label="Export" onClick={props.togglePlayerExportModalOn} />
          </Auth>
        </NavDropdown>
      </Auth>
      <Auth role_permissions={props.role_permissions} permissionRequested={[EXPORT_COACHES, VIEW_COACHES, IMPORT_COACHES]}>
        <NavDropdown label="coaches" hideSlash>
          <Auth role_permissions={props.role_permissions} permissionRequested={VIEW_COACHES}>
            <NavDropdownItem label="Search" onClick={props.goToCoaches} />
          </Auth>
          <Auth role_permissions={props.role_permissions} permissionRequested={IMPORT_COACHES}>
            <NavDropdownItem label="Import" onClick={() => props.goToImports('coaches')} />
          </Auth>
          <Auth role_permissions={props.role_permissions} permissionRequested={EXPORT_COACHES}>
            <NavDropdownItem label="Export" onClick={props.toggleCoachExportModalOn} />
          </Auth>
        </NavDropdown>
      </Auth>
      <Auth role_permissions={props.role_permissions} permissionRequested={VIEW_DASHBOARD}>
        <NavDropdown label="Dashboard" hideSlash>
          <NavDropdownItem label="Players" onClick={props.goToPlayersDashboard} />
          <NavDropdownItem label="Coaches" onClick={props.goToCoachesDashboard} />
        </NavDropdown>
      </Auth>
    </MobileNavigationContainer>
  </div>
);

mobileNavbarContainer.propTypes = {
  showNavbar: PropTypes.bool.isRequired,
  role_permissions: PropTypes.array.isRequired,
  toggleCoachExportModalOn: PropTypes.func.isRequired,
  togglePlayerExportModalOn: PropTypes.func.isRequired,
  goToImports: PropTypes.func.isRequired,
  goToCoachesDashboard: PropTypes.func.isRequired,
  goToPlayersDashboard: PropTypes.func.isRequired,
  goToCoaches: PropTypes.func.isRequired,
  goToPlayers: PropTypes.func.isRequired,
};

export default mobileNavbarContainer;
