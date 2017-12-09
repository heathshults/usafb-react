import React, { Component } from 'react';

import Container from 'components/containers/Container';
import DataHeader from 'components/data-header/DataHeader';
import DataTable from 'components/data-table/DataTable';
import ImportModal from './components/import-modal/ImportModal';

import TableSettings from './models/table-settings';

class Players extends Component {
  constructor() {
    super();

    this.tableSettings = new TableSettings();

    this.state = {

    };
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
        <DataTable
          headers={this.tableSettings.getHeaders()}
        />
      </Container>
    );
  }
}

export default Players;
