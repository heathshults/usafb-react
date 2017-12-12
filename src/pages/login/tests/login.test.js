import React from 'react';
import { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
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

// describe('[LOGIN PAGE] functionality test', () => {
//   test('login test', () => {
//     const { loginWrapper } = setupLoginComponent();

//     loginWrapper.setState({
//       email: 'testemail@gmail.com',
//       password: 'password123'
//     });

//     const loginButton = loginWrapper.find(LoginButton);
//     console.log(loginButton);

//     // const loginComponent = renderer.create(loginWrapper);
//     // let tree = loginComponent.toJSON();
//     // console.log(tree);
//   });
// });