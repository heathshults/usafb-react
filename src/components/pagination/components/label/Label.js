import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './label.css';

const label = props => (
  <div className="d-flex flex-wrap align-items-center usafb-pagination__content pl-3">
    <p className="pagination__label">
      Showing {props.startingIndex} to {props.endingIndex} of {props.totalItems} rows
    </p>
    <ButtonDropdown
      isOpen={props.dropdownOpen}
      toggle={props.toggleDropdown}
      className="pagination__label-dropdown"
    >
      <DropdownToggle>
        {props.rowsPerPage}
      </DropdownToggle>
      <DropdownMenu
        className="pagination__label-dropdown-menu"
      >
        <DropdownItem
          className={`${props.rowsPerPage === 10 ? 'pagination__label-dropdown-active' : 'pagination__label-dropdown-item'}`}
          onClick={props.updateRowsPerPage}
          value={10}
        >
          10
        </DropdownItem>
        <DropdownItem
          className={`${props.rowsPerPage === 25 ? 'pagination__label-dropdown-active' : 'pagination__label-dropdown-item'}`}
          onClick={props.updateRowsPerPage}
          value={25}
        >
          25
        </DropdownItem>
        <DropdownItem
          className={`${props.rowsPerPage === 50 ? 'pagination__label-dropdown-active' : 'pagination__label-dropdown-item'}`}
          onClick={props.updateRowsPerPage}
          value={50}
        >
          50
        </DropdownItem>
        <DropdownItem
          className={`${props.rowsPerPage === 100 ? 'pagination__label-dropdown-active' : 'pagination__label-dropdown-item'}`}
          onClick={props.updateRowsPerPage}
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

label.propTypes = {
  startingIndex: PropTypes.number.isRequired,
  endingIndex: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired
};

export default label;
