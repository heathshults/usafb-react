import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import User from '../user/User';
import './dropdown.css';

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
          <DropdownItem>
            <Link to="/profile">
              My Profile
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/users">
              Manage Users
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/help">
              Help / FAQ
            </Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/profile">
              Sign Out
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default NavDropdown;
