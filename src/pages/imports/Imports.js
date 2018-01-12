import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';

import ImportsModal from './components/imports-modal/ImportsModal';
import ImportButton from './components/import-button/ImportButton';
import Columns from './models/columns';
import testData from './models/test-data';

class Imports extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  componentWillMount() {
    this.columns = new Columns();
  }

  componentWillUnmount() {
    this.columns.clearColumns();
  }

  onDrop = (files) => {
    this.setState({
      files
    });
  }

  getImportButton = () => (
    <ImportButton toggle={this.toggle} />
  )

  // TODO create callbacks for modal dismiss
  // if canceled, then clear the files on state
  // everytime it closes, dispatch csv status to accepting
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
          onDrop={this.onDrop}
          status={this.props.dropzoneStatus}
        />
        <HeaderContentDivider />
        <DataHeader header={`Imports for ${this.props.match.params.type}`} buttons={this.getImportButton()} />
        <DataTable
          columns={this.columns.getColumns()}
          data={testData}
        />
        <Pagination
          totalItems={testData.length}
          rowsPerPage={10}
          updateRowsPerPage={() => { }}
          onChange={() => { }}
        />
      </Container>
    );
  }
}

Imports.propTypes = {
  match: PropTypes.object.isRequired,
  dropzoneStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({ importsReducer }) => importsReducer;

export default connect(mapStateToProps)(Imports);
