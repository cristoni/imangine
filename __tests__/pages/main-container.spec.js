import React from 'react';
import MainContainer from '../../components/main-container';
import renderer from 'react-test-renderer';

test('MainContainer renders the main page container', () => {
  const component = renderer.create(
    <MainContainer />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});