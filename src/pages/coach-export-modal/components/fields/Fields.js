import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import PropTypes from 'prop-types';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import './fields.css';

const Fields = props => (
  <div className="fields">
    <p>Selected Fields</p>
    <VirtualizedSelect
      autofocus
      clearable={true}
      labelKey="label"
      multi={true}
      onChange={props.updateSelectedItem}
      options={props.listValues}
      searchable={true}
      simpleValue
      value={props.selectedItem}
      valueKey="value"
    />
  </div>
);

/* eslint-disable */
Fields.propTypes = {
  listValues: PropTypes.array.isRequired,
  // selectedValues: PropTypes.array.isRequired,
  updateSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.any
};

export default Fields;
