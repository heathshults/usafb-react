import React, { Component } from 'react';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';

class Imports extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Container>
        <HeaderContentDivider />
        <DataHeader header="Imports" />
        Imports page
      </Container>
    );
  }
}

export default Imports;
