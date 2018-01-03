import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';
import Search from 'components/search/Search';

import Columns from 'components/data-table/models/columns';
import ImportModal from 'components/import-modal/ImportModal';

import importCsv from 'utils/import';

import { SEARCH_PLAYERS } from './dux/actions';

class Players extends Component {
  constructor() {
    super();

    this.columns = new Columns();

    this.state = {
      filters: this.columns.getColumnsForFilters(),
      columns: this.columns.getColumnsForTableHeader(),
      displayFilters: false,
      displayAdvancedSearch: false,
      currentPage: 1,
      totalItems: 100,
      players: [],
      showModal: false,
      uploadedFile: null,
      first_name: '',
      last_name: '',
      usafb_id: null,
      date_of_birth: '',
      city: '',
      state: ''
    };

    this.callPlayersDispatch = _.debounce(() => {
      this.props.searchPlayers({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        usafb_id: this.state.usafb_id,
        date_of_birth: this.state.date_of_birth,
        city: this.state.city,
        state: this.state.state
      });
    }, 250, { maxWait: 1000 });
  }

  componentWillMount() {
    const players = [...Array(10)].map((val, index) => ({
      'USAFB#': index,
      'Last Name': 'Test',
      'First Name': 'Test',
      Source: 'Test',
      Gender: 'M',
      'Date of Birth': '1-17-91',
      'Age Group': 'Derp',
      Organization: 'Blue Star'
    }));

    this.setState({
      players
    });
  }

  setPage = (page) => {
    this.setState({
      currentPage: page
    });
  }

  getCellFormatters = () => ({
    'First Name': this.linkToPlayerFormatter,
    'Last Name': this.linkToPlayerFormatter
  });

  // TODO: Need to update pathname with the final play profile route
  linkToPlayerFormatter = (cell, row) => (
    <Link to={{ pathname: '/player', state: row }}>{cell}</Link>
  )

  toggleFilters = () => {
    this.setState({
      displayFilters: !this.state.displayFilters
    });
  }

  updateFilters = (filter) => {
    this.columns.updateFilters(filter);

    this.setState({
      filters: this.columns.getColumnsForFilters(),
      columns: this.columns.getColumnsForTableHeader()
    });
  }

  toggleAdvancedSearch = () => {
    this.setState({
      displayAdvancedSearch: !this.state.displayAdvancedSearch
    });
  }

  toggleModal = () => {
    this.setState({
      uploadedFile: null,
      showModal: !this.state.showModal
    });
  }

  updateFileInParentState = (uploadedFile) => {
    this.setState({
      uploadedFile
    });
  }

  updateSearchFilters = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    }, () => {
      this.callPlayersDispatch();
    });
  }


  clearSearchFilters = () => {
    this.setState({
      first_name: '',
      last_name: '',
      usafb_id: undefined,
      date_of_birth: '',
      city: '',
      state: ''
    });
  }

  uploadFile = () => {
    importCsv(this.state.uploadedFile)
      .then(data => data)
      .catch(err => err);
  }

  render() {
    return (
      <Container>
        <HeaderContentDivider />
        <ImportModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          updateFileInParentState={this.updateFileInParentState}
          uploadFile={this.uploadFile}
          uploadedFile={this.state.uploadedFile}
        />
        <DataHeader
          header="Number of Players"
          numberOfUsers={1000}
          showModal={this.toggleModal}
        />
        <div className="customRow">
          <Search
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            usafb_id={this.state.usafb_id}
            date_of_birth={this.state.date_of_birth}
            city={this.state.city}
            state={this.state.state}
            updateSearchFilters={this.updateSearchFilters}
            clearSearchFilters={this.clearSearchFilters}
          />
          <div className="column">
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
          </div>
        </div>
      </Container>
    );
  }
}

Players.propTypes = {
  playerSearchData: PropTypes.array, //eslint-disable-line
  searchPlayers: PropTypes.func.isRequired
};

Players.defaultProps = {
  playerSearchData: []
};

const mapStateToProps = ({ playerSearchReducer }) => ({ playerSearchData: playerSearchReducer.playerSearchData });
const mapDispatchToProps = dispatch => ({
  searchPlayers: searchData => dispatch({ type: SEARCH_PLAYERS, data: { searchData } })
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
