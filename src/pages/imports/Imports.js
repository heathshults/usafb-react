import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Papa from 'papaparse';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';

import ImportsModal from './components/imports-modal/ImportsModal';
import ImportButton from './components/import-button/ImportButton';
import Columns from './models/columns';
import testData from './models/test-data';
import { CSV_CHECKING, CSV_ACCEPTED, CSV_REJECTED, CSV_ACCEPTING, UPLOAD_DATA, GET_IMPORTS } from './dux/actions';

class Imports extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      file: {}
    };
  }

  componentWillMount() {
    this.columns = new Columns();
    this.props.getImports(this.props.match.params.type);
  }

  componentWillUnmount() {
    this.columns.clearColumns();
  }

  onDrop = (files) => {
    this.props.checkCsvFile();

    Papa.parse(files[0], {
      complete: (result) => {
        if (result.data.length > 2600) {
          this.props.csvFileRejected();
        } else {
          this.props.csvFileAccepted();
          this.setState({
            file: files[0]
          });
        }
      }
    });
  }

  getImportButton = () => (
    <ImportButton toggle={this.displayImportModal} importing={this.props.importing} />
  )

  getCellFormatters = () => ({
    Actions: this.getActionFormatter
  })

  getActionFormatter = (cell, row) => (
    <div className="text-center">
      {this.renderExportButton(row)}
      {this.renderDeleteButton(row)}
    </div>
  )

  cancelUpload = () =>
    this.setState({
      open: false
    });

  displayImportModal = () => {
    this.props.csvFileAccepting();
    this.setState({
      open: true
    });
  }

  // TODO add upload API endpoint
  uploadCsv = () => {
    this.setState({
      open: false
    });

    this.props.uploadCsv(this.state.file);
  }

  renderExportButton = () => (
    <a
      className="my-exports__icon pr-4"
      role="button"
      tabIndex={0}
    >
      <i className="fa fa-download text-lg" />
    </a>
  );

  renderDeleteButton = () => (
    <a
      className="my-exports__icon my-exports__trash"
      role="button"
      tabIndex={0}
    >
      <i className="fa fa-trash pr-2 text-lg" />
    </a>
  )

  render() {
    return (
      <Container>
        <ImportsModal
          open={this.state.open}
          toggle={this.cancelUpload}
          cancel={this.cancelUpload}
          onDrop={this.onDrop}
          status={this.props.dropzoneStatus}
          upload={this.uploadCsv}
        />
        <HeaderContentDivider />
        <DataHeader
          header={`Imports for ${this.props.match.params.type}`}
          buttons={this.getImportButton()}
        />
        <DataTable
          columns={this.columns.getColumns()}
          data={this.props.imports}
          formatters={this.getCellFormatters()}
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
  dropzoneStatus: PropTypes.string.isRequired,
  checkCsvFile: PropTypes.func.isRequired,
  csvFileAccepted: PropTypes.func.isRequired,
  csvFileRejected: PropTypes.func.isRequired,
  csvFileAccepting: PropTypes.func.isRequired,
  uploadCsv: PropTypes.func.isRequired,
  importing: PropTypes.bool.isRequired,
  getImports: PropTypes.func.isRequired,
  imports: PropTypes.array.isRequired
};

const mapStateToProps = ({ importsReducer }) => importsReducer;
const mapDispatchToProps = dispatch => ({
  checkCsvFile: () => dispatch({ type: CSV_CHECKING }),
  csvFileAccepted: () => dispatch({ type: CSV_ACCEPTED }),
  csvFileRejected: () => dispatch({ type: CSV_REJECTED }),
  csvFileAccepting: () => dispatch({ type: CSV_ACCEPTING }),
  uploadCsv: file => dispatch({ type: UPLOAD_DATA, file }),
  getImports: userType => dispatch({ type: GET_IMPORTS, userType })
});

export default connect(mapStateToProps, mapDispatchToProps)(Imports);
