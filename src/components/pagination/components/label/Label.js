import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="d-flex">
        <p>
          Showing 1 to 10 of {this.props.totalItems} rows
        </p>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle caret>
            {this.state.rowsPerPage}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={this.updateRowsPerPage}
              value={10}
            >
              10
            </DropdownItem>
            <DropdownItem
              onClick={this.updateRowsPerPage}
              value={25}
            >
              25
            </DropdownItem>
            <DropdownItem
              onClick={this.updateRowsPerPage}
              value={50}
            >
              50
            </DropdownItem>
            <DropdownItem
              onClick={this.updateRowsPerPage}
              value={100}
            >
              100
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <p style={{ marginLeft: 10 }}>
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
