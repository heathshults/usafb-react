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
    const isSevenPagesOrLess = totalPages <= 7;

    switch (index) {
      case 0: // first page
        return 1;
      case 1:
        if (isRelevancyState || (this.state.currentPage >= 5 && totalPages > 7)) {
          return '...';
        }
        return index + 1;
      case 2:
        if (onLastThreePages && !isSevenPagesOrLess) {
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
        if (onLastThreePages && !isSevenPagesOrLess) {
          return totalPages - 3;
        }
        return index + 1;
      case 4:
        if (onLastThreePages && !isSevenPagesOrLess) {
          return totalPages - 2;
        }
        if (isRelevancyState) {
          return this.state.currentPage + 1;
        }
        return index + 1;
      case 5:
        if (isRelevancyState || (this.state.currentPage < 5 && totalPages > 7)) {
          return '...';
        }
        if (onLastThreePages && !isSevenPagesOrLess) {
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
      }, this.callback);
    }
  }

  calculateTotalPaginationLinks = () => {
    const totalPages = this.calculateTotalPages();
    if (totalPages <= 7) {
      return totalPages;
    }

    return 7;
  }

  // Used to determine the starting index the pagination label is displaying
  calculateStartingIndex = () => (this.state.currentPage * this.props.rowsPerPage) - this.props.rowsPerPage + 1;

  // Used to determine the ending index the pagination label is displaying
  calculateEndingIndex = () => {
    if (this.state.currentPage === this.calculateTotalPages()) {
      return this.props.totalItems;
    }
    return this.state.currentPage * this.props.rowsPerPage;
  }

  calculateTotalPages = () => Math.ceil(this.props.totalItems / this.props.rowsPerPage);

  toggleDropdown = () => this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });

  updateRowsPerPage = (event) => {
    event.persist();
    this.setState({
      currentPage: 1
    }, () => this.updateRowsPerPageCallback(+event.target.value));
  }

  updateRowsPerPageCallback = (value) => {
    this.props.updateRowsPerPage(value);
    setTimeout(() => {
      this.callback();
    });
  }

  previousPage = () => {
    if (this.state.currentPage !== 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      }, this.callback);
    }
  }

  nextPage = () => {
    const totalPages = this.calculateTotalPages();

    if (this.state.currentPage !== totalPages) {
      this.setState({
        currentPage: this.state.currentPage + 1
      }, this.callback);
    }
  }

  callback = () => {
    this.props.onChange(this.state.currentPage, this.props.rowsPerPage);
  }

  render() {
    return (
      <div className="row d-flex justify-content-between mb-3">
        <div className="row col col-md-12">
          <Label
            startingIndex={this.calculateStartingIndex()}
            endingIndex={this.calculateEndingIndex()}
            currentPage={this.state.currentPage}
            totalItems={this.props.totalItems}
            rowsPerPage={this.props.rowsPerPage}
            dropdownOpen={this.state.dropdownOpen}
            toggleDropdown={this.toggleDropdown}
            updateRowsPerPage={this.updateRowsPerPage}
          />
          <Pagination className="mb-0 col col-md-6 justify-content-end usafb-pagination__content">
            <PaginationItem className="usafb-pagination__link" onClick={this.previousPage}>
              <PaginationLink previous />
            </PaginationItem>
            {this.getPaginationLinks()}
            <PaginationItem className="usafb-pagination__link" onClick={this.nextPage}>
              <PaginationLink next />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    );
  }
}

PaginationComponent.propTypes = {
  totalItems: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired
};

export default PaginationComponent;
