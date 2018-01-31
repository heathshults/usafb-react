import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BarChartLabel extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    console.dir(this.props); //eslint-disable-line
  }

  render() {
    return (
      <text
        x={this.props.x}
        y={this.props.y}
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
  x: PropTypes.any.isRequired,
  y: PropTypes.any.isRequired,
  fill: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default BarChartLabel;
