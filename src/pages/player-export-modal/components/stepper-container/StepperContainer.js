import React from 'react';
// import PropTypes from 'prop-types';
import Stepper from 'react-stepzilla';

import Fields from '../fields/Fields';
import Filters from '../filters/Filters';
import Success from '../success/Success';

const StepperContainer = () => {
  const steps =
    [
      { name: 'Fields', component: <Fields /> },
      { name: 'Filters', component: <Filters /> },
      { name: 'Success', component: <Success /> }
    ];

  return (
    <div className="step-progress">
      <Stepper steps={steps} />
    </div>
  );
};

StepperContainer.propTypes = {

};

export default StepperContainer;

