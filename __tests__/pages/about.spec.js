import React from 'react';
import About from '../../pages/about';
import renderer from 'react-test-renderer';

test('About renders the about page', () => {
  const component = renderer.create(
    <About />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});