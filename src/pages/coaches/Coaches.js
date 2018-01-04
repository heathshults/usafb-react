import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from 'components/containers/blue-container/BlueContainer';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataHeader from 'components/data-header/DataHeader';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';
import Columns from 'components/data-table/models/columns';
import ImportModal from 'components/import-modal/ImportModal';
import SearchButton from 'components/search-button/SearchButton';
import SearchModal from 'components/search-modal/SearchModal';
import importCsv from 'utils/import';

import debounce from 'lodash/debounce';

import { SEARCH_COACHES } from './dux/actions';

class Coaches extends Component {
  constructor() {
    super();

    this.columns = new Columns();

    this.state = {
      filters: this.columns.getColumnsForFilters(),
      columns: this.columns.getColumnsForTableHeader(),
      searchModalOpen: true,
      displayFilters: false,
      displayAdvancedSearch: false,
      currentPage: 1,
      totalItems: 100,
      coaches: [],
      showModal: false,
      uploadedFile: null,
      first_name: '',
      last_name: '',
      usafb_id: null,
      date_of_birth: '',
      city: '',
      state: ''
    };
  }

  componentWillMount() {
    const coaches = [...Array(10)].map((val, index) => ({
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
      coaches
    });
  }

  setPage = (page) => {
    this.setState({
      currentPage: page
    });
  }

  getSearchButton = () => (
    <SearchButton toggle={this.toggleSearchModal} searching={false} />
  )

  callCoachesDispatch = debounce(() => {
    this.props.searchCoaches({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      usafb_id: this.state.usafb_id,
      date_of_birth: this.state.date_of_birth,
      city: this.state.city,
      state: this.state.state
    });
  }, 250, { maxWait: 1000 });

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
      this.callCoachesDispatch();
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

  toggle = () => console.log("test"); //eslint-disable-line

  toggleSearchModal = (valuesInputted) => {
    console.log(valuesInputted); //eslint-disable-line
    // if (!valuesInputted) {
    //   this.setState({
    //     searchModalOpen: !this.state.searchModalOpen
    //   });
    // }
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
        <SearchModal
          open={this.state.searchModalOpen}
          toggle={this.toggleSearchModal}
          header="Search for Coaches"
        />
        <DataHeader
          header="Number of Coaches"
          numberOfUsers={1000}
          showModal={this.toggleModal}
          buttons={this.getSearchButton()}
        />
        <DataTable
          columns={this.state.columns}
          data={this.state.coaches}
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

Coaches.propTypes = {
  coachSearchData: PropTypes.array, //eslint-disable-line
  searchCoaches: PropTypes.func.isRequired
};

Coaches.defaultProps = {
  coachSearchData: []
};

const mapStateToProps = ({ coachSearchReducer }) => ({ coachSearchData: coachSearchReducer.coachSearchData });
const mapDispatchToProps = dispatch => ({
  searchCoaches: searchData => dispatch({ type: SEARCH_COACHES, data: { searchData } })
});

export default connect(mapStateToProps, mapDispatchToProps)(Coaches);
