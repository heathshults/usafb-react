import React, { Component } from 'react';

import Container from 'components/containers/blue-container/BlueContainer';
import Content from './components/content/Content';
import Header from './components/header/Header';

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        this is a landing page
        <Content>
          <Header count={100000} header="players" />
          <div />
        </Content>
      </Container>
    );
  }
}

export default Landing;
