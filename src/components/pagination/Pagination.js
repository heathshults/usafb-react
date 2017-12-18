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

  getPaginationLinks = () => {
    const totalPages = this.calculateTotalPages();
    // isRelevancyState will determine if the current page is between the [...] buttons
    // http://patternry.com/p=search-pagination/
    const isRelevancyState = this.props.currentPage >= 5 && this.props.currentPage <= totalPages - 5;

    return [...Array(this.calculateTotalPaginationLinks())].map((val, index) => {
      if (index === 0) {
        return this.getStandardPaginationLink(1);
      } else if (index === 6) {
        return this.getStandardPaginationLink(totalPages);
      } else if (this.displayMorePagesAvailable(index)) {
        return this.getStandardPaginationLink('...');
      } else if (index === 2 && isRelevancyState) {
        return this.getStandardPaginationLink(this.props.currentPage - 1);
      } else if (index === 3 && isRelevancyState) {
        return this.getStandardPaginationLink(this.props.currentPage);
      } else if (index === 4 && isRelevancyState) {
        return this.getStandardPaginationLink(this.props.currentPage + 1);
      }
      return this.getStandardPaginationLink(index + 1);
    });
  }

  getStandardPaginationLink = value => (
    <PaginationItem
      key={uuidv4()}
      active={this.props.currentPage === value}
      className={`${value !== '...' ? 'usafb-pagination__link' : 'usafb-pagination__more-pages'}`}
      onClick={() => this.props.setPage(value)}
    >
      <PaginationLink >
        {value}
      </PaginationLink>
    </PaginationItem>
  );

  calculateTotalPaginationLinks = () => {
    if (this.calculateTotalPages() <= 5) {
      return 5;
    }

    return 7;
  }

  displayMorePagesAvailable = (index) => {
    if (this.calculateTotalPages() < 7) {
      return false;
    } else if (this.props.currentPage <= 5 && index === 5) {
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
          <PaginationItem className="usafb-pagination__link">
            <PaginationLink previous />
          </PaginationItem>
          {this.getPaginationLinks()}
          <PaginationItem className="usafb-pagination__link">
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
