import React, { Component } from 'react';
import { ResponsiveContainer, CartesianGrid, PieChart, Pie, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';

import Container from 'components/containers/blue-container/BlueContainer';
import Content from './components/content/Content';
import Header from './components/header/Header';

import { barGraph } from './models/dummyData';
import './landing.css';

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container className="landing__container">
        <Content>
          <Header count={100000} header="players" />
          <div className="landing__bar-chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={barGraph}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  fill="#fff"
                />
                <YAxis
                  dataKey="value"
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Content>
        <Content>
          <Header count={100000} header="Coaches" />
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={barGraph}
                fill="#8884d8"
                dataKey="value"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Content>
      </Container>
    );
  }
}

export default Landing;
