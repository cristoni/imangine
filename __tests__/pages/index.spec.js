import React from 'react';
import Index from '../../pages/index';
import renderer from 'react-test-renderer';

test('Index renders the main page', () => {
  const component = renderer.create(
    <Index />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});