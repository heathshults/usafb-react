import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
// import configureStore from 'redux-mock-store';

import LoginWithRedux, { Login } from '../Login';
import Container from '../components/container/Container';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import Logo from '../components/logo/Logo';
import ErrorMessage from '../components/error/Error';
import InputGroup from '../components/input-group/InputGroup';
import Input from '../components/input/Input';
import RememberMe from '../components/remember-me/RememberMe';
import LoginButton from '../components/login-button/LoginButton';

const setupLoginComponent = () => {
  const props = {
    loginReducer: {
      loginError: '',
      loggingIn: false
    },
    login: () => { }
  };

  const loginWrapper = mount(<Login {...props} />);

  return {
    props,
    loginWrapper
  };
}

describe('[LOGIN PAGE] UI components test', () => {
  const { loginWrapper } = setupLoginComponent();

  test('container exists', () => {
    expect(loginWrapper.find(Container).length).toBe(1);
  });

  test('header exists', () => {
    expect(loginWrapper.find(Header).length).toBe(1);
  });

  test('form exists', () => {
    expect(loginWrapper.find(Form).length).toBe(1);
  });

  test('logo exists', () => {
    expect(loginWrapper.find(Logo).length).toBe(1);
  });

  test('error message exists', () => {
    expect(loginWrapper.find(ErrorMessage).length).toBe(1);
  });

  test('input group exists', () => {
    expect(loginWrapper.find(InputGroup).length).toBe(1);
  });

  test('email and password text fields exists', () => {
    expect(loginWrapper.find(Input).length).toBe(2);
  });

  test('remember me exists', () => {
    expect(loginWrapper.find(RememberMe).length).toBe(1);
  });

  test('login button exists', () => {
    expect(loginWrapper.find(LoginButton).length).toBe(1);
  });
});

describe('[LOGIN PAGE] functionality test', () => {
  const { loginWrapper } = setupLoginComponent();

  test('Login functionality', () => {

    // console.log(process.env);
    // get a snapshot of the login screen without any user input
    let component = renderer.create(loginWrapper);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    loginWrapper.setState({
      email: 'footballautomation@gmail.com',
      password: 'password123'
    });

    loginWrapper.find(Input).first().value = loginWrapper.state().email;
    loginWrapper.find(Input).last().value = loginWrapper.state().password;

    // get a snapshot of user inputs
    component = renderer.create(loginWrapper);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const loginButton = loginWrapper.find(LoginButton).simulate('click');
    const loggedInComponent = renderer.create(loginWrapper);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});