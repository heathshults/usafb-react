import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import Loading from './components/loading/Loading';
import './data-table.css';

const headerStyle = {
  textAlign: 'center',
  padding: '10px 20px'
};

const getNoDataText = loading => (loading ? <Loading /> : 'No data available');

const tableRowStyle = (row, rowIndex) => (rowIndex % 2 === 0 ? 'data-table__striped-row' : '');

const getTableHeight = (display, loading, data) => {
  if (!display || loading || data.length === 0) {
    return '';
  }
  return '500';
};

const dataTable = props => (
  <div className={`${props.display ? '' : 'usafb__data-table-hide '}row`}>
    <BootstrapTable
      className="col-md-12 usafb__data-table"
      height={getTableHeight(props.display, props.loading, props.data)}
      scrollTop={'Bottom'}
      trClassName={tableRowStyle}
      data={props.data}
      options={{ noDataText: getNoDataText(props.loading) }}
    >
      {props.columns.map(column =>
        (
          <TableHeaderColumn
            dataField={column.dataField}
            isKey={column.isKey}
            key={uuidv4()}
            dataSort={column.dataSort}
            dataFormat={props.formatters[column.label]}
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
  formatters: PropTypes.object,
  display: PropTypes.bool
};

dataTable.defaultProps = {
  data: [],
  loading: true,
  formatters: {},
  display: true
};

export default dataTable;
