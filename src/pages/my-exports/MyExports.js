import React, { Component } from 'react';

import Container from 'components/containers/blue-container/BlueContainer';
import DataHeader from 'components/data-header/DataHeader';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';

import DeleteModal from './components/delete-modal/DeleteModal';

import Columns from './models/columns';
import dummyData from './models/dummy-data';

import './my-exports.css';

class MyExports extends Component {
  constructor() {
    super();
    this.state = {
      deleteModalOpen: false,
      fileToDelete: ''
    };

    this.columns = new Columns();
  }

  getCellFormatters = () => ({
    Actions: this.getActionFormatter
  })

  getActionFormatter = (cell, row) => (
    <div className="text-center">
      {this.renderExportButton(row)}
      {this.renderDeleteButton(row)}
    </div>
  )

  // TODO hook up to API
  export = (file) => {
    console.dir(file); //eslint-disable-line
  }

  openDeleteModal = (file) => {
    this.setState({
      fileToDelete: file.file_name
    }, this.toggleDeleteModal);
  }

  toggleDeleteModal = () => {
    this.setState({
      deleteModalOpen: !this.state.deleteModalOpen
    });
  }

  renderExportButton = row => (
    <a
      className="my-exports__icon pr-4"
      onClick={() => this.export(row)}
      role="button"
      tabIndex={0}
    >
      <i className="fa fa-upload text-lg" />
      <span>&nbsp;Export</span>
    </a>
  );

  renderDeleteButton = row => (
    <a
      className="my-exports__icon my-exports__trash"
      onClick={() => this.openDeleteModal(row)}
      role="button"
      tabIndex={0}
    >
      <i className="fa fa-trash pr-2 text-lg" />
    </a>
  )

  render() {
    return (
      <Container>
        <HeaderContentDivider />
        <DeleteModal
          open={this.state.deleteModalOpen}
          toggle={this.toggleDeleteModal}
          fileName={this.state.fileToDelete}
        />
        <DataHeader header="My Exports" />
        <DataTable
          columns={this.columns.getPlayersColumns()}
          data={dummyData}
          formatters={this.getCellFormatters()}
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
