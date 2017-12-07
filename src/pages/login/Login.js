import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';

import { LOGIN } from './dux/actions';

import Container from './components/container/Container';
import Header from './components/header/Header';
import Form from './components/form/Form';
import FormImage from './components/logo/Logo';
import InputGroup from './components/input-group/InputGroup';
import Input from './components/input/Input';
import RememberMe from './components/remember-me/RememberMe';
import LoginButton from './components/login-button/LoginButton';

class Login extends Component {
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

  login = () => this.props.login(this.state.email, this.state.password);

  render() {
    return (
      <Container>
        <Header />
        <Form>
          <FormImage />
          <InputGroup
            action={this.login}
          >
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
          <RememberMe />
          <LoginButton
            onClick={this.login}
          />
        </Form>
      </Container>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });
const mapDispatchToProps = dispatch => (
  {
    login: (email, password) => dispatch({ type: LOGIN, payload: { email, password } })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
