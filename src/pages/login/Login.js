import React, { Component } from 'react';
import $ from 'jquery';

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

  componentDidMount() {
    $('#fadeInH1').fadeIn(500);
    setTimeout(this.nextline, 100);
  }

  nextline = () => {
    $('#si-form').fadeIn(500);
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
