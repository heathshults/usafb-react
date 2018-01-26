import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import uuidv4 from 'uuid/v4';

import Label from './components/label/Label';
import './pagination.css';

// TODO make sure currentPage and set currentPage are passed
// in through props. This will make code cleaner and logic simpler
// when making API calls
class PaginationComponent extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
      currentPage: 1,
      mobilePaginationMode: false
    };
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  getPaginationLinks = () => {
    if (this.state.mobilePaginationMode) {
      return this.getStandardPaginationLink(this.props.currentPage);
    }
    return (
      [...Array(this.calculateTotalPaginationLinks())].map((val, index) => {
        const paginationValue = this.getPageValue(index);
        return this.getStandardPaginationLink(paginationValue);
      })
    );
  }

  getPageValue = (index) => {
    const totalPages = this.calculateTotalPages();
    // isRelevancyState will determine if the current page is between the [...] buttons
    // http://patternry.com/p=search-pagination/
    const isRelevancyState = this.props.currentPage >= 5 && this.props.currentPage < totalPages - 3;
    const onLastThreePages = this.props.currentPage >= totalPages - 3;
    const isSevenPagesOrLess = totalPages <= 7;

    switch (index) {
      case 0: // first page
        return 1;
      case 1:
        if (isRelevancyState || (this.props.currentPage >= 5 && totalPages > 7)) {
          return '...';
        }
        return index + 1;
      case 2:
        if (onLastThreePages && !isSevenPagesOrLess) {
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
        if (onLastThreePages && !isSevenPagesOrLess) {
          return totalPages - 3;
        }
        return index + 1;
      case 4:
        if (onLastThreePages && !isSevenPagesOrLess) {
          return totalPages - 2;
        }
        if (isRelevancyState) {
          return this.props.currentPage + 1;
        }
        return index + 1;
      case 5:
        if (isRelevancyState || (this.props.currentPage < 5 && totalPages > 7)) {
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
      this.setState({
        currentPage: value
      }, this.callback);
    }
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions = () => {
    if (window.innerWidth < 890) {
      this.setState({
        mobilePaginationMode: true
      });
    } else {
      this.setState({
        mobilePaginationMode: false
      });
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
  calculateStartingIndex = () => (this.props.currentPage * this.props.rowsPerPage) - this.props.rowsPerPage + 1;

  // Used to determine the ending index the pagination label is displaying
  calculateEndingIndex = () => {
    if (this.props.currentPage === this.calculateTotalPages()) {
      return this.props.totalItems;
    }
    return this.props.currentPage * this.props.rowsPerPage;
  }

  calculateTotalPages = () => Math.ceil(this.props.totalItems / this.props.rowsPerPage);

  toggleDropdown = () => this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });

  updateRowsPerPage = (event) => {
    event.persist();
    this.callback(+event.target.value);
    // this.setState({
    //   currentPage: 1
    // }, () => this.updateRowsPerPageCallback(+event.target.value));
  }

  // updateRowsPerPageCallback = (value) => {
  //   this.props.updateRowsPerPage(value);
  //   setTimeout(() => {
  //     this.callback();
  //   });
  // }

  previousPage = () => {
    if (this.props.currentPage !== 1) {
      this.setState({
        currentPage: this.props.currentPage - 1
      }, this.callback);
    }
  }

  nextPage = () => {
    const totalPages = this.calculateTotalPages();

    if (this.props.currentPage !== totalPages) {
      this.setState({
        currentPage: this.props.currentPage + 1
      }, this.callback);
    }
  }

  callback = (rowsPerPage) => {
    this.props.onChange(this.props.currentPage, rowsPerPage);
  }

  render() {
    return (
      <div className={`${this.props.display ? '' : 'usafb-pagination__hide '} usafb-pagination__container`} >
        <Label
          startingIndex={this.calculateStartingIndex()}
          endingIndex={this.calculateEndingIndex()}
          currentPage={this.props.currentPage}
          totalItems={this.props.totalItems}
          rowsPerPage={this.props.rowsPerPage}
          dropdownOpen={this.state.dropdownOpen}
          toggleDropdown={this.toggleDropdown}
          updateRowsPerPage={this.updateRowsPerPage}
        />
        <Pagination className="mb-0 justify-content-end usafb-pagination__content">
          <PaginationItem className="usafb-pagination__link" onClick={this.props.previousPage}>
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
  onChange: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  display: PropTypes.bool
};

PaginationComponent.defaultProps = {
  display: true
};

export default PaginationComponent;
