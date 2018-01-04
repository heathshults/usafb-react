import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';
import SearchButton from 'components/search-button/SearchButton';
import SearchModal from 'components/search-modal/SearchModal';

import Columns from './models/columns';
import { SEARCH_PLAYERS } from './dux/actions';

class Players extends Component {
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
    'First Name': this.linkToPlayerFormatter,
    'Last Name': this.linkToPlayerFormatter
  });

  // TODO: Need to update pathname with the final play profile route
  linkToPlayerFormatter = (cell, row) => (
    <Link to={{ pathname: '/player', state: row }}>{cell}</Link>
  )

  displaySearchModal = () =>
    this.setState({
      searchModalOpen: true
    });

  modalDismissed = (data) => {
    data.currentPage = 1; //eslint-disable-line
    data.per_page = 10; //eslint-disable-line
    this.props.searchPlayers(data);
    this.setState({
      searchModalOpen: false
    });
  }

  paginationOnChange = (currentPage, perPage) => {
    const data = this.props.searchValues;
    data.currentPage = currentPage;
    data.per_page = perPage;
    this.props.searchPlayers(data);
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
        <DataHeader
          header="Number of Players"
          numberOfUsers={1000}
          buttons={this.getSearchButton()}
        />
        <DataTable
          columns={this.columns.getPlayersColumns()}
          data={this.props.players}
          formatters={this.getCellFormatters()}
        />
        <Pagination
          totalItems={this.props.totalPlayers}
          rowsPerPage={this.props.rowsPerPage}
          updateRowsPerPage={this.props.updateRowsPerPage}
          onChange={this.paginationOnChange}
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
  updateRowsPerPage: PropTypes.func.isRequired
};

const mapStateToProps = ({ playerSearchReducer }) => playerSearchReducer;
const mapDispatchToProps = dispatch => ({
  searchPlayers: data => dispatch({ type: SEARCH_PLAYERS, data }),
  updateRowsPerPage: rowsPerPage => dispatch({ type: UPDATE_ROWS_PER_PAGE, rowsPerPage })
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
