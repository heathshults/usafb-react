import React from 'react';
import Input from '../components/input/Input';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('[LOGIN PAGE] input field test', () => {
  let email = '';

  const updateEmail = (event) => {
    email = event.target.value;
  }

  const testEmail = 'testingemail@email.com';

  const inputField = shallow(
    <Input
      icon="envelope"
      placeholder="Email"
      value={email}
      onChange={updateEmail}
    />,
  );

  inputField.find('input').simulate('change', { target: { value: testEmail } });

  expect(email).toEqual(testEmail);
});