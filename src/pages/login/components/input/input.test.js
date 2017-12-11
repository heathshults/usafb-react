import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('[LOGIN PAGE] input field update', () => {
  let email = '';

  const updateEmail = (event) => {
    email = event.target.value;
  }

  const inputField = shallow(
    <Input
      icon="envelope"
      placeholder="Email"
      value={email}
      onChange={updateEmail}
    />,
  );

  inputField.find('input').simulate('change', { target: { value: 'Testing' } });

  expect(email).toEqual('Testing');
});