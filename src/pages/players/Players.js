import React, { Component } from 'react';

import Container from 'components/containers/Container';
import DataHeader from 'components/data-header/DataHeader';
import ImportModal from './components/import-modal/ImportModal';

class Players extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <DataHeader
          userType="players"
          numberOfUsers={1000}
        />
        <ImportModal />
      </Container>
    );
  }
}

export default Players;
