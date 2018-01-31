import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';

import './bar-chart.css';

class BarChart extends Component {
  constructor() {
    super();

    this.state = {};
    this.chart = {};
  }

  componentDidMount() {
    this.chart = echarts.init(document.getElementById('landing-bar-chart'));
    this.chart.setOption(this.props.option);
  }

  componentWillReceiveProps(nextProps) {
    this.chart.setOption(nextProps.option);
  }

  render() {
    return (
      <div id="landing-bar-chart" className="landing__bar-chart" />
    );
  }
}

BarChart.propTypes = {
  option: PropTypes.object.isRequired
};

export default BarChart;
