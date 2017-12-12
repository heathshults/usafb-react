import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('[PLAYER IMPORT COMPONENT] button', () => {
  let email = '';

  const clickButton = (event) => {
    email = event.target.value;
  }

  // Write simple test to check button click
  const button = shallow(
    // <Input
    //   icon="envelope"
    //   placeholder="Email"
    //   value={email}
    //   onChange={updateEmail}
    // />,
  );

  // inputField.find('input').simulate('change', { target: { value: 'Testing' } });

  // expect(email).toEqual('Testing');
});
