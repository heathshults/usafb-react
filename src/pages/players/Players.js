import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';

import Columns from 'components/data-table/models/columns';

import { SEARCH_PLAYERS } from './dux/actions';

class Players extends Component {
  constructor() {
    super();

    this.columns = new Columns();

    this.state = {
      searchModalOpen: true
    };
  }

  getCellFormatters = () => ({
    'First Name': this.linkToPlayerFormatter,
    'Last Name': this.linkToPlayerFormatter
  });

  // TODO: Need to update pathname with the final play profile route
  linkToPlayerFormatter = (cell, row) => (
    <Link to={{ pathname: '/player', state: row }}>{cell}</Link>
  )

  render() {
    return (
      <Container>
        <HeaderContentDivider />
        <DataHeader
          header="Number of Players"
          numberOfUsers={1000}
          showModal={this.toggleModal}
        />
        <DataTable
          columns={this.state.columns}
          data={this.state.players}
          formatters={this.getCellFormatters()}
        />
        <Pagination
          currentPage={this.state.currentPage}
          totalItems={this.state.totalItems}
          setPage={this.setPage}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ playerSearchReducer }) => ({ playerSearchData: playerSearchReducer.playerSearchData });
const mapDispatchToProps = dispatch => ({
  searchPlayers: searchData => dispatch({ type: SEARCH_PLAYERS, data: { searchData } })
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
