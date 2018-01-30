import React from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepzilla';
import 'styles/stepper/stepper.css';

import Fields from '../fields/Fields';
import Filters from '../filters/Filters';
import Success from '../success/Success';

const StepperContainer = (props) => {
  const steps =
    [
      { name: 'Fields', component: <Fields listValues={props.listValues} validationError={props.validationError} selectedItem={props.selectedItem} selectedValues={props.selectedValues} triggerValidationError={props.triggerValidationError} updateSelectedItem={props.updateSelectedItem} /> },
      { name: 'Filters', component: <Filters positions={props.positions} validationError={props.validationError} dateOfBirthDirection={props.dateOfBirthDirection} triggerValidationError={props.triggerValidationError} selectedValues={props.selectedValues} deleteSavedFilter={props.deleteSavedFilter} filterValueEmptyError={props.filterValueEmptyError} savedFilters={props.savedFilters} activeFilter={props.activeFilter} updateActiveFilter={props.updateActiveFilter} updateActiveFilterValue={props.updateActiveFilterValue} saveFilter={props.saveFilter} /> },
      { name: 'Success', component: <Success toggleExportModalOff={props.toggleExportModalOff} /> }
    ];

  return (
    <div className="example">
      <div className="step-progress">
        <Stepper steps={steps} prevBtnOnLastStep={false} showSteps={false} />
      </div>
    </div>
  );
};

StepperContainer.propTypes = {
  positions: PropTypes.array.isRequired,
  listValues: PropTypes.array.isRequired,
  selectedValues: PropTypes.array,
  updateSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.any,
  savedFilters: PropTypes.array,
  activeFilter: PropTypes.string,
  updateActiveFilterValue: PropTypes.func.isRequired,
  updateActiveFilter: PropTypes.func.isRequired,
  saveFilter: PropTypes.func.isRequired,
  filterValueEmptyError: PropTypes.bool.isRequired,
  deleteSavedFilter: PropTypes.func.isRequired,
  validationError: PropTypes.bool.isRequired,
  triggerValidationError: PropTypes.func.isRequired,
  dateOfBirthDirection: PropTypes.string.isRequired,
  toggleExportModalOff: PropTypes.func.isRequired
};

StepperContainer.defaultProps = {
  selectedValues: [],
  savedFilters: [],
  activeFilter: '',
  selectedItem: ''
};

export default StepperContainer;

