import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './label.css';

class Label extends Component {
  constructor() {
    super();

    this.state = {
      rowsPerPage: 10,
      dropdownOpen: false
    };
  }

  toggleDropdown = () => this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });

  updateRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: +event.target.value
    });
  }

  render() {
    return (
      <div className="d-flex align-items-center">
        <p className="pagination__label">
          Showing 1 to 10 of {this.props.totalItems} rows
        </p>
        <ButtonDropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleDropdown}
          className="pagination__label-dropdown"
        >
          <DropdownToggle caret>
            {this.state.rowsPerPage}
          </DropdownToggle>
          <DropdownMenu
            className="pagination__label-dropdown-menu"
          >
            <DropdownItem
              className={`${this.state.rowsPerPage === 10 ? 'pagination__label-dropdown-active' : 'pagination__label-dropdown-item'}`}
              onClick={this.updateRowsPerPage}
              value={10}
            >
              10
            </DropdownItem>
            <DropdownItem
              className={`${this.state.rowsPerPage === 25 ? 'pagination__label-dropdown-active' : 'pagination__label-dropdown-item'}`}
              onClick={this.updateRowsPerPage}
              value={25}
            >
              25
            </DropdownItem>
            <DropdownItem
              className={`${this.state.rowsPerPage === 50 ? 'pagination__label-dropdown-active' : 'pagination__label-dropdown-item'}`}
              onClick={this.updateRowsPerPage}
              value={50}
            >
              50
            </DropdownItem>
            <DropdownItem
              className={`${this.state.rowsPerPage === 100 ? 'pagination__label-dropdown-active' : 'pagination__label-dropdown-item'}`}
              onClick={this.updateRowsPerPage}
              value={100}
            >
              100
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <p className="pagination__label">
          rows per page
        </p>
      </div>
    );
  }
}

Label.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default Label;
