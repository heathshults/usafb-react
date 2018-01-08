import React, { Component } from 'react';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';

class MyExports extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <DataHeader header="My Exports" />
      </Container>
    );
  }
}

export default MyExports;
