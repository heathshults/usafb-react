import React, { Component } from 'react';

import Container from 'components/containers/Container';
import DataHeader from 'components/data-header/DataHeader';
import DataTable from 'components/data-table/DataTable';

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
      displayFilters: false
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
          displayFilters={this.state.displayFilters}
          toggleFilters={this.toggleFilters}
          filters={this.state.filters}
          updateFilters={this.updateFilters}
        />
        <DataTable
          columns={this.state.columns}
        />
      </Container>
    );
  }
}

export default Players;
