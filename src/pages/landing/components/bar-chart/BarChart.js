import React from 'react';
import PropTypes from 'prop-types';
import ReactEchartsCore from 'echarts-for-react/lib/core';

const barChart = props => (
  <ReactEchartsCore
    option={props.option}
    lazyUpdate={true}
  />
);

barChart.propTypes = {
  option: PropTypes.object.isRequired
};

export default barChart;
