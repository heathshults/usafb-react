import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from 'components/containers/blue-container/BlueContainer';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataHeader from 'components/data-header/DataHeader';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';
import SearchButton from 'components/search-button/SearchButton';
import SearchModal from 'components/search-modal/SearchModal';

import Columns from './models/columns';
import { SEARCH_COACHES } from './dux/actions';

class Coaches extends Component {
  constructor() {
    super();

    this.state = {
      searchModalOpen: true
    };
  }

  componentWillMount() {
    this.columns = new Columns();
  }

  componentWillUnmount() {
    this.columns.clearColumns();
  }

  getSearchButton = () => (
    <SearchButton toggle={this.displaySearchModal} searching={false} />
  )

  getCellFormatters = () => ({
    'First Name': this.linkToCoachFormatter,
    'Last Name': this.linkToCoachFormatter
  });

  linkToCoachFormatter = (cell, row) => (
    <Link to={{ pathname: `/coaches/${row.id}` }}>{cell}</Link>
  )

  displaySearchModal = () =>
    this.setState({
      searchModalOpen: true
    });

  modalDismissed = (data, cancelled = false) => {
    if (!cancelled) {
      data.currentPage = 1; //eslint-disable-line
      data.per_page = 10; //eslint-disable-line
      this.props.searchCoaches(data);
      this.setState({
        searchModalOpen: false
      });
    } else {
      this.setState({
        searchModalOpen: false
      });
    }
  }

  paginationOnChange = (currentPage, perPage) => {
    const data = this.props.searchValues;
    data.currentPage = currentPage;
    data.per_page = perPage;
    this.props.searchCoaches(data);
  }

  render() {
    return (
      <Container>
        <HeaderContentDivider />
        <SearchModal
          open={this.state.searchModalOpen}
          toggle={this.modalDismissed}
          header="Search for Coaches"
        />
        {
          !this.state.searchModalOpen &&
          <DataHeader
            header="Number of Coaches"
            numberOfUsers={this.props.totalCoaches}
            buttons={this.getSearchButton()}
          />
        }
        <DataTable
          columns={this.columns.getCoachesColumns()}
          data={this.props.coaches}
          formatters={this.getCellFormatters()}
          display={!this.state.searchModalOpen} // hide the table when the modal is open
          loading={this.props.searchingCoaches}
        />
        <Pagination
          totalItems={this.props.totalCoaches}
          rowsPerPage={this.props.rowsPerPage}
          updateRowsPerPage={this.props.updateRowsPerPage}
          onChange={this.paginationOnChange}
          display={!this.state.searchModalOpen} // hide pagination when the modal is open
        />
      </Container>
    );
  }
}

Coaches.propTypes = {
  coaches: PropTypes.array.isRequired,
  searchingCoaches: PropTypes.bool.isRequired,
  searchValues: PropTypes.object.isRequired,
  totalCoaches: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  searchCoaches: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired
};

const mapStateToProps = ({ coachSearchReducer }) => coachSearchReducer;
const mapDispatchToProps = dispatch => ({
  searchCoaches: data => dispatch({ type: SEARCH_COACHES, data }),
  updateRowsPerPage: rowsPerPage => dispatch({ type: UPDATE_ROWS_PER_PAGE, rowsPerPage })
});

export default connect(mapStateToProps, mapDispatchToProps)(Coaches);
