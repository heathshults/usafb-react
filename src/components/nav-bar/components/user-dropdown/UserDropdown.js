import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
          <DropdownItem href="/profile" className="nav-bar__dropdown-button-item">
            My Profile
          </DropdownItem>
          <DropdownItem href="/users" className="nav-bar__dropdown-button-item">
            Manage Users
          </DropdownItem>
          <DropdownItem href="/help" className="nav-bar__dropdown-button-item">
            Help / FAQ
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="/profile" className="nav-bar__dropdown-button-item">
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default NavDropdown;
