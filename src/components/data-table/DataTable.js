import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import Loading from './components/loading/Loading';

const headerStyle = {
  textAlign: 'center',
  padding: '10px 20px'
};

const getNoDataText = loading => (loading ? <Loading /> : 'No data available');

const dataTable = props => (
  <div className="row">
    <BootstrapTable
      className="col-md-12"
      options={{ noDataText: getNoDataText(props.loading) }}
    >
      {props.headers.map(header => (
        <TableHeaderColumn
          dataField={header.dataField}
          isKey={header.isKey}
          key={uuidv4()}
          dataSort={header.dataSort}
          className="usafb__table-header"
          thStyle={headerStyle}
        >
          {header.label.toUpperCase()}
        </TableHeaderColumn>
      ))}
    </BootstrapTable>
  </div>
);

dataTable.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  headers: PropTypes.array.isRequired,
};

dataTable.defaultProps = {
  data: [],
  loading: true
};

export default dataTable;
