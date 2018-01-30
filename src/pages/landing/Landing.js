import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ResponsiveContainer, CartesianGrid, PieChart, Cell, Pie, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import uuidv4 from 'uuid/v4';

import Container from 'components/containers/blue-container/BlueContainer';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import Content from './components/content/Content';
import Header from './components/header/Header';
// import BarChart1 from './components/bar-chart/BarChart';

import { GET_STATS } from './dux/actions';
import colors from './models/colors';
import './landing.css';

// NOTE: we are using echarts for this page
// https://github.com/hustcc/echarts-for-react

class Landing extends Component {
  constructor() {
    super();

    this.barChartOptions = {
      series: [
        {
          name: 'Reference Page',
          type: 'bar',
          radius: '55%',
          data: [
            { value: 400, name: 'Searching Engine' },
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 274, name: 'Alliance Advertisement' },
            { value: 235, name: 'Video Advertisement' }
          ]
        }
      ]
    };
  }

  componentWillMount() {
    this.props.getStats();
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
          {/* <BarChart1 option={this.barChartOptions} /> */}
          <Content>
            <Header count={this.props.num_players} header="players" />
            <div className="landing__bar-chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={this.props.players}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    dataKey="count"
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip />
                  <Bar dataKey="count">
                    {
                      this.props.players.map((entry, index) =>
                        <Cell fill={colors[index]} key={uuidv4()} />
                      )
                    }
                  </Bar>
                </BarChart>
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
