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
      {props.columns.map(column =>
        (
          <TableHeaderColumn
            dataField={column.label}
            isKey={column.isKey}
            key={uuidv4()}
            dataSort={column.dataSort}
            className="usafb__table-header"
            thStyle={headerStyle}
          >
            {column.label}
          </TableHeaderColumn>
        )
      )}
    </BootstrapTable>
  </div>
);

dataTable.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
};

dataTable.defaultProps = {
  data: [],
  loading: true
};

export default dataTable;
