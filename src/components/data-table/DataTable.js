import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const dataTable = props => (
  <BootstrapTable options={{ noDataText: 'This is custom text for empty data' }}>
    {props.headers.map(header => (
      <TableHeaderColumn
        dataField={header.dataField}
        isKey={header.isKey}
        key={uuidv4()}
        dataSort={header.dataSort}
      >
        {header.label.toUpperCase()}
      </TableHeaderColumn>
    ))}
  </BootstrapTable>
);

dataTable.propTypes = {
  data: PropTypes.array,
  headers: PropTypes.array.isRequired,
};

dataTable.defaultProps = {
  data: []
};

export default dataTable;
