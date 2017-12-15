import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Label from './components/label/Label';

class PaginationComponent extends Component {
  constructor() {
    super();
    this.state = {
      rowsPerPage: 10,
      dropdownOpen: false,
    };
  }

  // Used to determine the starting index the data table is displaying
  calculateStartingIndex = () => (this.props.currentPage * this.state.rowsPerPage) - this.state.rowsPerPage + 1;

  // Used to determine the ending index the data table is displaying
  calculateEndingIndex = () => this.props.currentPage * this.state.rowsPerPage;

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
          {[...Array(20)].map((val, index) => (
            <PaginationItem key={index}>
              <PaginationLink>
                {index}
              </PaginationLink>
            </PaginationItem>
          ))}
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
