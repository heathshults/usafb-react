import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ResponsiveContainer, PieChart, Cell, Pie, Tooltip } from 'recharts';
import uuidv4 from 'uuid/v4';

import Container from 'components/containers/blue-container/BlueContainer';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import Content from './components/content/Content';
import Header from './components/header/Header';
import BarChart1 from './components/bar-chart/BarChart';

import { GET_STATS } from './dux/actions';
import colors from './models/colors';
import './landing.css';

// NOTE: we are using echarts for this page
// https://ecomfe.github.io/echarts-doc/public/en/index.html

class Landing extends Component {
  constructor() {
    super();

    this.barChartOptions = {
      color: ['#0174CB', '#4EB3FF', '#0192FF', '#27597F', '#0175CC', '#81C8FF', '#4CB1FF'],
      tooltip: {},
      calculable: true,
      xAxis: {
        type: 'category'
      },
      yAxis: {
        type: 'value'
      },
      series: []
    };

    this.barChartLabelOption = {
      show: true,
      position: 'insideBottom',
      distance: 15,
      align: 'left',
      verticalAlign: 'middle',
      rotate: 90,
      fontSize: 16,
      rich: {
        name: {
          textBorderColor: '#fff'
        }
      }
    };
  }

  componentWillMount() {
    this.props.getStats();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.players !== this.props.players || nextProps.coaches !== this.props.coaches) {
      this.barChartOptions.xAxis.data = nextProps.players.map(player => player.name);
      this.barChartOptions.series = [{
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'insideBottom',
            distance: 20,
            align: 'left',
            verticalAlign: 'middle',
            rotate: 90,
            formatter: '{b}',
            fontSize: 16,
          }
        },
        data: nextProps.players.map(player => player.count)
      }];
    }
  }

  // got code from http://jsfiddle.net/x5em3hdp/
  renderCustomPieLabel = (data) => {
    const RADIAN = Math.PI / 180;
    const radius = data.innerRadius + (data.outerRadius - data.innerRadius) * 0.5;
    const x = data.cx + radius * Math.cos(-data.midAngle * RADIAN);
    const y = data.cy + radius * Math.sin(-data.midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > data.cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(data.percent * 100).toFixed(0)}%`}
      </text>
    );
  }

  render() {
    return (
      <Container>
        <HeaderContentDivider />
        <div className="landing__container">
          <Content>
            <Header count={this.props.num_players} header="players" />
            <div className="landing__bar-chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart1 option={this.barChartOptions} />
              </ResponsiveContainer>
            </div>
          </Content>
          <Content>
            <Header count={this.props.num_coaches} header="Coaches" />
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={this.props.coaches}
                  fill="#8884d8"
                  dataKey="count"
                  label={this.renderCustomPieLabel}
                  labelLine={false}
                >
                  {
                    this.props.coaches.map((entry, index) =>
                      <Cell fill={colors[index]} stroke={colors[index]} key={uuidv4()} />
                    )
                  }
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Content>
        </div>
      </Container>
    );
  }
}

Landing.propTypes = {
  getStats: PropTypes.func.isRequired,
  num_coaches: PropTypes.number.isRequired,
  num_players: PropTypes.number.isRequired,
  players: PropTypes.array.isRequired,
  coaches: PropTypes.array.isRequired
};

const mapStateToProps = ({ landingReducer }) => landingReducer;
const mapDispatchToProps = dispatch => ({
  getStats: () => dispatch({ type: GET_STATS })
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
