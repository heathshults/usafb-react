import React from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepzilla';
import './stepperContainer.css';

import Fields from '../fields/Fields';
import Filters from '../filters/Filters';
import Success from '../success/Success';

const StepperContainer = (props) => {
  const steps =
    [
      { name: 'Fields', component: <Fields listValues={props.listValues} selectedItem={props.selectedItem} selectedValues={props.selectedValues} updateSelectedItem={props.updateSelectedItem} /> },
      { name: 'Filters', component: <Filters /> },
      { name: 'Success', component: <Success /> }
    ];

  return (
    <div className="example">
      <div className="step-progress">
        <Stepper steps={steps} />
      </div>
    </div>
  );
};

/* eslint-disable */
StepperContainer.propTypes = {
  listValues: PropTypes.array.isRequired,
  selectedValues: PropTypes.array.isRequired,
  updateSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.any
};

export default StepperContainer;

