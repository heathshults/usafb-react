import React, { Component } from 'react';

import Container from './components/container/Container';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <Container>
        <div>
          Login
        </div>

        <div />
      </Container>
    );
  }
}