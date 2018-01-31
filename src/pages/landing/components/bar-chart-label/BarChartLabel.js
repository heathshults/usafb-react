import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './bar-chart-label.css';

class BarChartLabel extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <text
        x={this.props.x}
        y={350}
        dy={-4}
        dx={20}
        fontSize="16"
        fill={this.props.fill}
        textAnchor="middle"
      >
        {this.props.value}%
      </text>
    );
  }
}

BarChartLabel.propTypes = {
  x: PropTypes.any,
  fill: PropTypes.any,
  value: PropTypes.any
};

BarChartLabel.defaultProps = {
  x: '',
  y: '',
  fill: '',
  value: ''
};

export default BarChartLabel;
