import React, { Component } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

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
          <BarChart
            data={barGraph}
            height={300}
            width={700}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="value" />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </Content>
        <Content>
          <Header count={100000} header="players" />
          <div />
        </Content>
      </Container>
    );
  }
}

export default Landing;
