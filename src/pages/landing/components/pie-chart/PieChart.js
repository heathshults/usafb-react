import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';

import './pie-chart.css';

class PieChart extends Component {
  constructor() {
    super();

    this.chart = {};
  }

  componentDidMount() {
    this.chart = echarts.init(document.getElementById('landing-pie-chart'));
    this.chart.setOption(this.props.option);
  }

  componentWillReceiveProps(nextProps) {
    this.chart.setOption(nextProps.option);
  }

  render() {
    return (
      <div id="landing-pie-chart" className="landing__pie-chart" />
    );
  }
}

PieChart.propTypes = {
  option: PropTypes.object.isRequired
};

export default PieChart;
