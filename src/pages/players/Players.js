import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';
import SearchButton from 'components/search-button/SearchButton';
import SearchModal from 'components/search-modal/SearchModal';

import Columns from './models/columns';
import { SEARCH_PLAYERS, UPDATE_ROWS_PER_PAGE, UPDATE_CURRENT_PAGE } from './dux/actions';

class Players extends Component {
  constructor() {
    super();

    this.state = {
      searchModalOpen: true,
      rowsPerPage: 10,
      currentPage: 1
    };
  }

  componentWillMount() {
    this.columns = new Columns();
  }

  componentWillUnmount() {
    this.columns.clearColumns();
  }

  onSortChange = (sortName, sortOrder) => {
    console.log(sortName, sortOrder); //eslint-disable-line
  }

  getSearchButton = () => (
    <SearchButton toggle={this.displaySearchModal} searching={false} />
  )

  getCellFormatters = () => ({
    'First Name': this.linkToPlayerFormatter,
    'Last Name': this.linkToPlayerFormatter,
    ID: this.idFormatter,
    'Date of Birth': this.DOBFormatter
  });

  getPaddedDummyID = (id) => {
    let dummyID = this.state.currentPage === 1 ? 1 : this.state.rowsPerPage * (this.state.currentPage - 1) + 1;

    for (let i = 0; i < this.props.players.length; i++) { //eslint-disable-line
      if (this.props.players[i].id === id) {
        dummyID += i;
      }
    }

    return dummyID.toString().padStart(8, '0');
  }

  DOBFormatter = dob => (
    <div>
      {moment(dob).format('MMM Do YYYY')}
    </div>
  )

  linkToPlayerFormatter = (cell, row) => (
    <Link to={{ pathname: `/players/${row.id}` }}>{cell}</Link>
  )

  idFormatter = (cell, row) => (
    <div> {this.getPaddedDummyID(row.id)} </div>
  );

  displaySearchModal = () =>
    this.setState({
      searchModalOpen: true
    });

  modalDismissed = (data, cancelled = false) => {
    if (!cancelled) {
      data.page = 1; //eslint-disable-line
      data.per_page = 10; //eslint-disable-line
      this.props.searchPlayers(data);
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
    this.props.updateRowsPerPage(perPage);
    this.props.updateCurrentPage(currentPage);
    const data = this.props.searchValues;
    data.page = currentPage;
    data.per_page = perPage;

    this.props.searchPlayers(data);
  }

  previousPage = (page) => {
    if (this.state.currentPage !== 1) {
      this.setState({
        currentPage: page
      });
    }
  }

  render() {
    return (
      <Container>
        <HeaderContentDivider />
        <SearchModal
          open={this.state.searchModalOpen}
          toggle={this.modalDismissed}
          header="Search for Players"
        />
        {
          !this.state.searchModalOpen &&
          <DataHeader
            header="Number of Players"
            numberOfUsers={this.props.totalPlayers}
            buttons={this.getSearchButton()}
          />
        }
        <DataTable
          columns={this.columns.getPlayersColumns()}
          data={this.props.players}
          formatters={this.getCellFormatters()}
          display={!this.state.searchModalOpen} // hide the table when the modal is open
          loading={this.props.searchingPlayers}
          onSortChange={this.onSortChange}
        />
        <Pagination
          currentPage={this.props.currentPage}
          totalItems={this.props.totalPlayers}
          rowsPerPage={this.props.rowsPerPage}
          onChange={this.paginationOnChange}
          display={!this.state.searchModalOpen && this.props.totalPlayers !== 0} // hide pagination when the modal is open or if there are no players
        />
      </Container>
    );
  }
}

Players.propTypes = {
  players: PropTypes.array.isRequired,
  searchValues: PropTypes.object.isRequired,
  totalPlayers: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  searchPlayers: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  updateCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  searchingPlayers: PropTypes.bool.isRequired
};

const mapStateToProps = ({ playerSearchReducer }) => playerSearchReducer;
const mapDispatchToProps = dispatch => ({
  searchPlayers: data => dispatch({ type: SEARCH_PLAYERS, data }),
  updateRowsPerPage: rowsPerPage => dispatch({ type: UPDATE_ROWS_PER_PAGE, rowsPerPage }),
  updateCurrentPage: currentPage => dispatch({ type: UPDATE_CURRENT_PAGE, currentPage })
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
