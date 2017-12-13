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
      columns: this.columns.getColumnsForTableHeader()
    };
  }

  componentWillMount() {
    console.dir(this.state);
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
        />
        <DataTable
          columns={this.state.columns}
        />
      </Container>
    );
  }
}

export default Players;
