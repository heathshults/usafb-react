import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import uuidv4 from 'uuid/v4';

import Label from './components/label/Label';

class PaginationComponent extends Component {
  constructor() {
    super();
    this.state = {
      rowsPerPage: 10,
      dropdownOpen: false,
    };
  }

  componentWillMount() {
  }

  // Used to determine the starting index the data table is displaying
  calculateStartingIndex = () => (this.props.currentPage * this.state.rowsPerPage) - this.state.rowsPerPage + 1;

  // Used to determine the ending index the data table is displaying
  calculateEndingIndex = () => this.props.currentPage * this.state.rowsPerPage;

  calculateTotalPages = () => Math.ceil(this.props.totalItems / this.state.rowsPerPage);

  toggleDropdown = () => this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });

  updateRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: +event.target.value
    });
  }

  getPaginationLinks = () =>
    [...Array(7)].map((val, index) => {
      if (index === 7) {
        return this.getStandardPaginationLink(this.calculateTotalPages());
      } else if (this.displayMorePagesAvailable(index)) {
        return this.getStandardPaginationLink('...');
      }
      return this.getStandardPaginationLink(index + 1);
    });

  getStandardPaginationLink = value => (
    <PaginationItem key={uuidv4()} active={this.props.currentPage === value}>
      <PaginationLink >
        {value}
      </PaginationLink>
    </PaginationItem>
  );

  displayMorePagesAvailable = (index) => {
    if (this.calculateTotalPages() < 7) {
      return false;
    } else if (this.props.currentPage <= 5 && index === 5) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="row d-flex justify-content-between mt-3 mb-3">
        <Label
          startingIndex={this.calculateStartingIndex()}
          endingIndex={this.calculateEndingIndex()}
          currentPage={this.props.currentPage}
          totalItems={this.props.totalItems}
          rowsPerPage={this.state.rowsPerPage}
          dropdownOpen={this.state.dropdownOpen}
          toggleDropdown={this.toggleDropdown}
          updateRowsPerPage={this.updateRowsPerPage}
        />
        <Pagination className="mb-0">
          <PaginationItem>
            <PaginationLink previous />
          </PaginationItem>
          {this.getPaginationLinks()}
          <PaginationItem>
            <PaginationLink next />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

PaginationComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default PaginationComponent;
