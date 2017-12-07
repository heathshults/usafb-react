import React, { Component } from 'react';
import $ from 'jquery';

import Container from './components/container/Container';
import Header from './components/header/Header';
import Form from './components/form/Form';
import FormImage from './components/logo/Logo';
import InputGroup from './components/input-group/InputGroup';
import Input from './components/input/Input';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
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

  updateEmail = event => this.setState({
    email: event.target.value
  });

  updatePassword = event => this.setState({
    password: event.target.value
  });

  render() {
    return (
      <Container>
        <Header />
        <Form>
          <FormImage />
          <InputGroup>
            <Input
              icon="envelope"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateEmail}
            />
            <Input
              icon="lock"
              placeholder="Password"
              inputType="password"
              value={this.state.password}
              onChange={this.updatePassword}
            />
          </InputGroup>
        </Form>
      </Container>
    );
  }
}
