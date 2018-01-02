import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';

import './nav-dropdown.css';

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
      <div className="d-flex align-items-center">
        <ButtonDropdown
          isOpen={this.state.open}
          toggle={this.toggle}
          className="nav-bar__dropdown"
        >
          <DropdownToggle
            caret
            className="nav-bar__dropdown-button"
          >
            {this.props.label}
          </DropdownToggle>
          <DropdownMenu>
            {React.Children.map(this.props.children, child => child)}
          </DropdownMenu>
        </ButtonDropdown>
        <div className="nav-bar__separator" />
      </div>
    );
  }
}

NavDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default NavDropdown;
