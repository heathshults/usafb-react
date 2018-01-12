import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';

import ImportsModal from './components/imports-modal/ImportsModal';
import ImportButton from './components/import-button/ImportButton';

class Imports extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  getImportButton = () => (
    <ImportButton toggle={this.toggle} />
  )

  toggle = () =>
    this.setState({
      open: !this.state.open
    });

  render() {
    return (
      <Container>
        <ImportsModal
          open={this.state.open}
          toggle={this.toggle}
        />
        <HeaderContentDivider />
        <DataHeader header={`Imports for ${this.props.match.params.type}`} buttons={this.getImportButton()} />
      </Container>
    );
  }
}

Imports.propTypes = {
  match: PropTypes.object.isRequired
};

export default Imports;
