import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import PropTypes from 'prop-types';

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import './fields.css';

// This smart component is needed due to StepZillas form of validation
class Fields extends Component {
  isValidated() {
    let dataIsValid = true;
    const selectedValues = this.props.selectedValues;
    if (selectedValues.length <= 0) {
      dataIsValid = false;
      this.props.triggerValidationError();
    }
    return dataIsValid;
  }

  render() {
    return (
      <div className="fields">
        <p>Selected Fields</p>
        <VirtualizedSelect
          autofocus
          clearable={true}
          labelKey="label"
          multi={true}
          onChange={this.props.updateSelectedItem}
          options={this.props.listValues}
          searchable={true}
          simpleValue
          value={this.props.selectedItem}
          valueKey="value"
        />
        {
          this.props.validationError &&
          <p className="error">At least one field must be selected</p>
        }
      </div>
    );
  }
}

Fields.propTypes = {
  listValues: PropTypes.array.isRequired,
  updateSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.any.isRequired,
  selectedValues: PropTypes.array.isRequired,
  triggerValidationError: PropTypes.func.isRequired,
  validationError: PropTypes.bool.isRequired
};

export default Fields;
