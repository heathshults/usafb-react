import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Papa from 'papaparse';
import moment from 'moment';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';

import selector from './dux/selectors';
import ImportsModal from './components/imports-modal/ImportsModal';
import ImportButton from './components/import-button/ImportButton';
import Columns from './models/columns';
import {
  CSV_CHECKING,
  CSV_ACCEPTED,
  CSV_REJECTED,
  CSV_ACCEPTING,
  UPLOAD_DATA,
  GET_IMPORTS,
  UPDATE_ROWS_PER_PAGE,
  DOWNLOAD_FILE,
  DOWNLOAD_RESULTS
} from './dux/actions';

import './imports.css';

class Imports extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      file: {}
    };

    // a variable that will store the value of either 'players' or 'coaches'
    this.userType = '';
  }

  componentWillMount() {
    this.columns = new Columns();
    this.userType = this.props.location.pathname.slice(9);

    const data = {
      page: 1,
      per_page: this.props.rowsPerPage
    };
    this.getImports(this.userType, data);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname.slice(9) !== nextProps.location.pathname.slice(9)) {
      const data = {
        page: 1,
        per_page: this.props.rowsPerPage
      };

      this.userType = nextProps.location.pathname.slice(9);

      this.getImports(this.userType, data);
    }
  }

  componentWillUnmount() {
    this.columns.clearColumns();
  }

  onDrop = (files) => {
    this.props.checkCsvFile();

    Papa.parse(files[0], {
      complete: (result) => {
        if (result.data.length > 2500) {
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

  getImports = (type, data) => this.props.getImports(type, data);

  getImportButton = () => (
    <ImportButton toggle={this.displayImportModal} importing={this.props.importing} />
  )

  getCellFormatters = () => ({
    Date: this.getDateFormatter,
    'File Name': this.getFileNameFormatter,
    Status: this.getStatusFormatter,
    '# Records': this.getRecordsFormatter,
    '# Imported': this.getImportedFormatter,
    '# Errors': this.getErrorFormatter
  })

  getDateFormatter = cell => (
    <div>
      {moment(cell).format('MMM Do YYYY')}
    </div>
  )

  getFileNameFormatter = (cell, row) => {
    if (row.downloadingSource) {
      return (
        <div>
          <i className="fa fa-spinner fa-spin mr-2" />
          downloading...
        </div>
      );
    }

    return (
      <a
        role="button"
        tabIndex={0}
        className="imports__download-link"
        onClick={() => this.props.downloadFile(row._id, 'source', this.userType, cell)} //eslint-disable-line
      >
        {cell}
      </a>
    );
  }

  getStatusFormatter = (cell) => {
    if (cell === 1) {
      return (
        <div className="text-success">
          Success
        </div>
      );
    }

    if (cell === -1) {
      return (
        <div className="text-danger">
          Failed
        </div>
      );
    }

    return (
      <div>
        Processing...
      </div>
    );
  }

  getRecordsFormatter = (cell, row) => {
    if (cell === 0) {
      return (
        <div>
          {cell === 0 ? '-' : cell}
        </div>
      );
    }

    return (
      <a
        role="button"
        tabIndex={0}
        className="imports__download-link"
        onClick={() => this.props.downloadResults(row.results, row.file_name)}
      >
        {cell}
      </a>
    );
  }

  getImportedFormatter = (cell, row) => {
    if (cell === 0) {
      return (
        <div>
          -
        </div>
      );
    }

    if (row.downloadingResults) {
      return (
        <div>
          <i className="fa fa-spinner fa-spin mr-2" />
          downloading...
        </div>
      );
    }

    return (
      <a
        role="button"
        tabIndex={0}
        className="imports__download-link"
        onClick={() => this.props.downloadFile(row._id, 'results', this.userType, cell)} //eslint-disable-line
      >
        {cell}
      </a>
    );
  }

  getErrorFormatter = (cell, row) => {
    if (cell === 0) {
      return (
        <div>
          -
        </div>
      );
    }

    if (row.downloadingErrors) {
      return (
        <div>
          <i className="fa fa-spinner fa-spin mr-2" />
          downloading...
        </div>
      );
    }

    return (
      <a
        role="button"
        tabIndex={0}
        className="imports__download-link"
        onClick={() => this.props.downloadFile(row._id, 'errors', this.userType, cell)} //eslint-disable-line
      >
        {cell}
      </a>
    );
  }

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

  uploadCsv = () => {
    this.setState({
      open: false
    });

    this.props.uploadCsv(this.userType, this.state.file);
  }

  paginationOnChange = (currentPage, perPage) => {
    const data = {
      page: currentPage,
      per_page: perPage
    };
    this.getImports(this.userType, data);
  }

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
          header={`Imports for ${this.props.location.pathname.slice(9)}`}
          buttons={this.getImportButton()}
        />
        <DataTable
          columns={this.columns.getColumns()}
          data={this.props.imports}
          formatters={this.getCellFormatters()}
          loading={this.props.gettingImports}
        />
        <Pagination
          totalItems={this.props.totalImports}
          rowsPerPage={this.props.rowsPerPage}
          updateRowsPerPage={this.props.updateRowsPerPage}
          onChange={this.paginationOnChange}
        />
      </Container>
    );
  }
}

Imports.propTypes = {
  location: PropTypes.object.isRequired,
  dropzoneStatus: PropTypes.string.isRequired,
  checkCsvFile: PropTypes.func.isRequired,
  csvFileAccepted: PropTypes.func.isRequired,
  csvFileRejected: PropTypes.func.isRequired,
  csvFileAccepting: PropTypes.func.isRequired,
  uploadCsv: PropTypes.func.isRequired,
  importing: PropTypes.bool.isRequired,
  getImports: PropTypes.func.isRequired,
  imports: PropTypes.array.isRequired,
  totalImports: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  gettingImports: PropTypes.bool.isRequired,
  downloadFile: PropTypes.func.isRequired,
  downloadResults: PropTypes.func.isRequired
};

const mapStateToProps = selector;
const mapDispatchToProps = dispatch => ({
  checkCsvFile: () => dispatch({ type: CSV_CHECKING }),
  csvFileAccepted: () => dispatch({ type: CSV_ACCEPTED }),
  csvFileRejected: () => dispatch({ type: CSV_REJECTED }),
  csvFileAccepting: () => dispatch({ type: CSV_ACCEPTING }),
  uploadCsv: (userType, file) => dispatch({ type: UPLOAD_DATA, userType, file }),
  getImports: (userType, data) => dispatch({ type: GET_IMPORTS, userType, data }),
  updateRowsPerPage: rowsPerPage => dispatch({ type: UPDATE_ROWS_PER_PAGE, rowsPerPage }),
  downloadFile: (id, fileType, userType, fileName) => dispatch({ type: DOWNLOAD_FILE, id, fileType, userType, fileName }),
  downloadResults: (results, fileName) => dispatch({ type: DOWNLOAD_RESULTS, results, fileName })
});

export default connect(mapStateToProps, mapDispatchToProps)(Imports);
