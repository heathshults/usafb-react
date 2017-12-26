import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import uuidv4 from 'uuid/v4';

import Label from './components/label/Label';
import './pagination.css';

class PaginationComponent extends Component {
  constructor() {
    super();
    this.state = {
      rowsPerPage: 10,
      dropdownOpen: false,
      currentPage: 1
    };
  }

  getPaginationLinks = () =>
    [...Array(this.calculateTotalPaginationLinks())].map((val, index) => {
      const paginationValue = this.getPageValue(index);
      return this.getStandardPaginationLink(paginationValue);
    });

  getPageValue = (index) => {
    const totalPages = this.calculateTotalPages();
    // isRelevancyState will determine if the current page is between the [...] buttons
    // http://patternry.com/p=search-pagination/
    const isRelevancyState = this.state.currentPage >= 5 && this.state.currentPage < totalPages - 3;
    const onLastThreePages = this.state.currentPage >= totalPages - 3;
    const isFivePagesOrLess = totalPages <= 5;

    switch (index) {
      case 0: // first page
        return 1;
      case 1:
        if (isRelevancyState || (this.state.currentPage > 5 && totalPages > 5)) {
          return '...';
        }
        return index + 1;
      case 2:
        if (onLastThreePages && !isFivePagesOrLess) {
          return totalPages - 4;
        }
        if (isRelevancyState) {
          return this.state.currentPage - 1;
        }
        return index + 1;
      case 3:
        if (isRelevancyState) {
          return this.state.currentPage;
        }
        if (onLastThreePages && !isFivePagesOrLess) {
          return totalPages - 3;
        }
        return index + 1;
      case 4:
        if (onLastThreePages && !isFivePagesOrLess) {
          return totalPages - 2;
        }
        if (isRelevancyState) {
          return this.state.currentPage + 1;
        }
        return index + 1;
      case 5:
        if (isRelevancyState || (this.state.currentPage < 5 && totalPages > 5)) {
          return '...';
        }
        if (onLastThreePages) {
          return totalPages - 1;
        }
        return index + 1;
      default: // last page
        return totalPages;
    }
  }

  getStandardPaginationLink = value => (
    <PaginationItem
      key={uuidv4()}
      active={this.state.currentPage === value}
      className={`${value !== '...' ? 'usafb-pagination__link' : 'usafb-pagination__more-pages'}`}
      onClick={() => this.setPage(value)}
    >
      <PaginationLink >
        {value}
      </PaginationLink>
    </PaginationItem>
  );

  setPage = (value) => {
    if (value !== '...' && value !== this.state.currentPage) {
      this.setState({
        currentPage: value
      });
    }
  }

  calculateTotalPaginationLinks = () => {
    const totalPages = this.calculateTotalPages();
    if (totalPages <= 5) {
      return totalPages;
    }

    return 7;
  }

  // Used to determine the starting index the data table is displaying
  calculateStartingIndex = () => (this.state.currentPage * this.state.rowsPerPage) - this.state.rowsPerPage + 1;

  // Used to determine the ending index the data table is displaying
  calculateEndingIndex = () => this.state.currentPage * this.state.rowsPerPage;

  calculateTotalPages = () => Math.ceil(this.props.totalItems / this.state.rowsPerPage);

  toggleDropdown = () => this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });

  updateRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: +event.target.value
    }, this.callback);
  }

  previousPage = () => {
    if (this.state.currentPage !== 1) {
      this.props.setPage(this.state.currentPage - 1);
    }
  }

  nextPage = () => {
    const totalPages = this.calculateTotalPages();

    if (this.state.currentPage !== totalPages) {
      this.props.setPage(this.state.currentPage + 1);
    }
  }

  callback = () => {
    this.props.onChange(this.state.currentPage, this.state.rowsPerPage);
  }

  render() {
    return (
      <div className="row d-flex justify-content-between mt-3 mb-3">
        <Label
          startingIndex={this.calculateStartingIndex()}
          endingIndex={this.calculateEndingIndex()}
          currentPage={this.state.currentPage}
          totalItems={this.props.totalItems}
          rowsPerPage={this.state.rowsPerPage}
          dropdownOpen={this.state.dropdownOpen}
          toggleDropdown={this.toggleDropdown}
          updateRowsPerPage={this.updateRowsPerPage}
        />
        <Pagination className="mb-0">
          <PaginationItem className="usafb-pagination__link" onClick={this.previousPage}>
            <PaginationLink previous />
          </PaginationItem>
          {this.getPaginationLinks()}
          <PaginationItem className="usafb-pagination__link" onClick={this.nextPage}>
            <PaginationLink next />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

PaginationComponent.propTypes = {
  totalItems: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PaginationComponent;
