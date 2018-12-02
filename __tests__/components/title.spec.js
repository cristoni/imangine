import React from 'react';
import Title from '../../components/title';

test('Title renders the site title with animation', () => {
  let wrapper = mount(<Title />);
  expect(wrapper).toMatchSnapshot();
});