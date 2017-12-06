import React, { Component } from 'react';

import Container from './components/container/Container';
import Header from './components/header/Header';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <Container>
        <Header />

        <div />
      </Container>
    );
  }
}