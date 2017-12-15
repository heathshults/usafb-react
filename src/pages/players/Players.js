import React, { Component } from 'react';

import Container from 'components/containers/Container';
import DataHeader from 'components/data-header/DataHeader';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';

import Columns from 'components/data-table/models/columns';

import DataTableFilter from 'components/data-table-filter/DataTableFilter';
import ImportModal from './components/import-modal/ImportModal';

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
      totalItems: 100
    };
  }

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

  render() {
    return (
      <Container>
        <ImportModal />
        <DataHeader
          userType="players"
          numberOfUsers={1000}
          importModalID="player-import-modal"
        />
        <DataTableFilter
          filters={this.state.filters}
          updateFilters={this.updateFilters}
          displayFilters={this.state.displayFilters}
          toggleFilters={this.toggleFilters}
          displayAdvancedSearch={this.state.displayAdvancedSearch}
          toggleAdvancedSearch={this.toggleAdvancedSearch}
        />
        <DataTable
          columns={this.state.columns}
        />
        <Pagination
          currentPage={this.state.currentPage}
          totalItems={this.state.totalItems}
        />
      </Container>
    );
  }
}

export default Players;
