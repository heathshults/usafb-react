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
    const isRelevancyState = this.props.currentPage >= 5 && this.props.currentPage < totalPages - 3;
    const onLastThreePages = this.props.currentPage >= totalPages - 3;

    switch (index) {
      case 0: // first page
        return 1;
      case 1:
        if (isRelevancyState || (this.props.currentPage > 5 && totalPages > 5)) {
          return '...';
        }
        return index + 1;
      case 2:
        if (onLastThreePages) {
          return totalPages - 4;
        }
        if (isRelevancyState) {
          return this.props.currentPage - 1;
        }
        return index + 1;
      case 3:
        if (isRelevancyState) {
          return this.props.currentPage;
        }
        if (onLastThreePages) {
          return totalPages - 3;
        }
        return index + 1;
      case 4:
        if (onLastThreePages) {
          return totalPages - 2;
        }
        if (isRelevancyState) {
          return this.props.currentPage + 1;
        }
        return index + 1;
      case 5:
        if (isRelevancyState || (this.props.currentPage < 5 && totalPages > 5)) {
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
      active={this.props.currentPage === value}
      className={`${value !== '...' ? 'usafb-pagination__link' : 'usafb-pagination__more-pages'}`}
      onClick={() => this.setPage(value)}
    >
      <PaginationLink >
        {value}
      </PaginationLink>
    </PaginationItem>
  );

  setPage = (value) => {
    if (value !== '...' && value !== this.props.currentPage) {
      this.props.setPage(value);
    }
  }

  calculateTotalPaginationLinks = () => {
    const totalPages = this.calculateTotalPages();

    if (totalPages <= 5) {
      return totalPages;
    }

    return 7;
  }

  displayMorePagesAvailable = (index) => {
    const totalPages = this.calculateTotalPages();
    if (this.calculateTotalPages() < 7) {
      return false;
    } else if (this.props.currentPage <= totalPages - 3 && index === 5) {
      return true;
    } else if (this.props.currentPage >= 5 && index === 1) {
      return true;
    }
    return false;
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

  previousPage = () => {
    if (this.props.currentPage !== 1) {
      this.props.setPage(this.props.currentPage - 1);
    }
  }

  nextPage = () => {
    const totalPages = this.calculateTotalPages();

    if (this.props.currentPage !== totalPages) {
      this.props.setPage(this.props.currentPage + 1);
    }
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
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default PaginationComponent;
