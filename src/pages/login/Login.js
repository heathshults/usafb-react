import React, { Component } from 'react';
import $ from 'jquery';

import Container from './components/container/Container';
import Header from './components/header/Header';
import Form from './components/form/Form';
import FormImage from './components/form/components/logo/Logo';
import InputGroup from './components/input-group/InputGroup';
import EmailInput from './components/email/Email';

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

  updateEmail = () => {
    console.log('testing');
  }

  render() {
    return (
      <Container>
        <Header />
        <Form>
          <FormImage />
          <InputGroup>
            <EmailInput
              value={this.state.email}
              onChange={this.updateEmail}
            />
            <div />
          </InputGroup>
        </Form>
      </Container>
    );
  }
}
