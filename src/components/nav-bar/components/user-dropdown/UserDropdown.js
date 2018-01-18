import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import User from '../user/User';
import './user-dropdown.css';

class NavDropdown extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  toggle = () => this.setState({
    open: !this.state.open
  });

  render() {
    return (
      <ButtonDropdown
        isOpen={this.state.open}
        toggle={this.toggle}
        className="nav-bar__dropdown"
      >
        <DropdownToggle
          caret
          className="nav-bar__dropdown-button"
        >
          <User />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className="nav-bar__dropdown-button-item">
            <Link to="/me">
              My Profile
            </Link>
          </DropdownItem>
          {
            this.props.roleName === 'Administrator' &&
            <DropdownItem className="nav-bar__dropdown-button-item">
              <Link to="/users">
                Manage Users
              </Link>
            </DropdownItem>
          }
          <DropdownItem className="nav-bar__dropdown-button-item">
            <Link to="/my-exports">
              My Exports
            </Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="nav-bar__dropdown-button-item" onClick={this.props.logout} >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

NavDropdown.propTypes = {
  logout: PropTypes.func.isRequired,
  roleName: PropTypes.string.isRequired
};

export default NavDropdown;
