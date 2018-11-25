import React from 'react';
import Uploader from '../../components/uploader';
import renderer from 'react-test-renderer';

test('Uploader renders a file uploader', () => {
  const component = renderer.create(
    <Uploader />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});