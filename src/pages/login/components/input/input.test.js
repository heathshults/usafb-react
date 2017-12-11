import React from 'react';
import Input from './Input';
import renderer from 'react-test-renderer';

test('Read input changes ', () => {
  const email = '';

  const updateEmail = (event) => {
    email = event.target.value;
  }

  const component = renderer.create(
    <Input
      icon="envelope"
      placeholder="Email"
      value={email}
      onChange={updateEmail}
    />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  console.log(tree.props);

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});