import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from 'components/containers/blue-container/BlueContainer';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataHeader from 'components/data-header/DataHeader';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';
import SearchButton from 'components/search-button/SearchButton';
import SearchModal from 'components/search-modal/SearchModal';
import importCsv from 'utils/import';

import debounce from 'lodash/debounce';

import Columns from './models/columns';
import { SEARCH_COACHES } from './dux/actions';

class Coaches extends Component {
  constructor() {
    super();

    this.columns = new Columns();

    this.state = {
      searchModalOpen: true,
      currentPage: 1,
      totalItems: 100,
    };
  }

  getSearchButton = () => (
    <SearchButton toggle={this.displaySearchModal} searching={false} />
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

  uploadFile = () => {
    importCsv(this.state.uploadedFile)
      .then(data => data)
      .catch(err => err);
  }

  displaySearchModal = () =>
    this.setState({
      searchModalOpen: true
    });

  modalDismissed = (data) => {
    this.props.searchCoaches(data);
    this.setState({
      searchModalOpen: false
    });
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
        <DataHeader
          header="Number of Coaches"
          numberOfUsers={1000}
          showModal={this.toggleModal}
          buttons={this.getSearchButton()}
        />
        <DataTable
          columns={this.columns.getCoachesColumns()}
          data={this.props.coaches}
        />
        <Pagination
          totalItems={this.props.totalCoaches}
          rowsPerPage={this.props.rowsPerPage}
          setPage={this.setPage}
        />
      </Container>
    );
  }
}

Coaches.propTypes = {
  coaches: PropTypes.array.isRequired,
  totalCoaches: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  searchCoaches: PropTypes.func.isRequired
};

const mapStateToProps = ({ coachSearchReducer }) => coachSearchReducer;
const mapDispatchToProps = dispatch => ({
  searchCoaches: data => dispatch({ type: SEARCH_COACHES, data })
});

export default connect(mapStateToProps, mapDispatchToProps)(Coaches);
