import React, { Component } from 'react';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';

import Columns from './models/columns';
import dummyData from './models/dummy-data';

class MyExports extends Component {
  constructor() {
    super();
    this.state = {};

    this.columns = new Columns();
  }

  render() {
    return (
      <Container>
        <DataHeader header="My Exports" />
        <DataTable
          columns={this.columns.getPlayersColumns()}
          data={dummyData}
        />
        <Pagination
          totalItems={dummyData.length}
          rowsPerPage={10}
          updateRowsPerPage={() => { }}
          onChange={() => { }}
        />
      </Container>
    );
  }
}

export default MyExports;
