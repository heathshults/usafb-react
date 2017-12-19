import React, { Component } from 'react';

import Container from 'components/containers/Container';
import DataHeader from 'components/data-header/DataHeader';
import DataTable from 'components/data-table/DataTable';
import Pagination from 'components/pagination/Pagination';
import Columns from 'components/data-table/models/columns';
import DataTableFilter from 'components/data-table-filter/DataTableFilter';

class Coaches extends Component {
  constructor() {
    super();

    this.columns = new Columns();

    this.state = {
      filters: this.columns.getColumnsForFilters(),
      columns: this.columns.getColumnsForTableHeader(),
      displayFilters: false,
      displayAdvancedSearch: false,
      currentPage: 1,
      totalItems: 100,
      coaches: []
    };
  }

  componentWillMount() {
    const coaches = [...Array(10)].map((val, index) => ({
      'USAFB#': index,
      'Last Name': 'Test',
      'First Name': 'Test',
      Source: 'Test',
      Gender: 'M',
      'Date of Birth': '1-17-91',
      'Age Group': 'Derp',
      Organization: 'Blue Star'
    }));

    this.setState({
      coaches
    });
  }

  setPage = (page) => {
    this.setState({
      currentPage: page
    });
  }

  toggleFilters = () => {
    this.setState({
      displayFilters: !this.state.displayFilters
    });
  }

  updateFilters = (filter) => {
    this.columns.updateFilters(filter);

    this.setState({
      filters: this.columns.getColumnsForFilters(),
      columns: this.columns.getColumnsForTableHeader()
    });
  }

  toggleAdvancedSearch = () => {
    this.setState({
      displayAdvancedSearch: !this.state.displayAdvancedSearch
    });
  }

  render() {
    return (
      <Container>
        <DataHeader
          userType="coaches"
          numberOfUsers={1000}
          importModalID="player-import-modal"
        />
        <DataTableFilter
          filters={this.state.filters}
          updateFilters={this.updateFilters}
          displayFilters={this.state.displayFilters}
          toggleFilters={this.toggleFilters}
          displayAdvancedSearch={this.state.displayAdvancedSearch}
          toggleAdvancedSearch={this.toggleAdvancedSearch}
        />
        <DataTable
          columns={this.state.columns}
          data={this.state.coaches}
        />
        <Pagination
          currentPage={this.state.currentPage}
          totalItems={this.state.totalItems}
          setPage={this.setPage}
        />
      </Container>
    );
  }
}

export default Coaches;