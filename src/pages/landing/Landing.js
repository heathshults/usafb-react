import React, { Component, Fragment } from 'react';
import { ResponsiveContainer, CartesianGrid, PieChart, Cell, Pie, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import uuidv4 from 'uuid/v4';

import Container from 'components/containers/blue-container/BlueContainer';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import Content from './components/content/Content';
import Header from './components/header/Header';

import { barGraph } from './models/dummyData';
import colors from './models/colors';
import './landing.css';

class Landing extends Component {
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

  renderCustomBarLabel = (data) => {
    if (data) {
      console.dir(data); //eslint-disable-line
      console.log(data.content()); //eslint-disable-line
    }

    return (
      <div>
        Data
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        <HeaderContentDivider />
        <Container className="landing__container">
          <Content>
            <Header count={'13,182'} header="players" />
            <div className="landing__bar-chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={barGraph}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    dataKey="value"
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8">
                    {
                      barGraph.map((entry, index) =>
                        <Cell fill={colors[index]} key={uuidv4()} />
                      )
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Content>
          <Content>
            <Header count={'762'} header="Coaches" />
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={barGraph}
                  fill="#8884d8"
                  dataKey="value"
                  label={this.renderCustomPieLabel}
                  labelLine={false}
                >
                  {
                    barGraph.map((entry, index) =>
                      <Cell fill={colors[index]} stroke={colors[index]} key={uuidv4()} />
                    )
                  }
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

export default Landing;
