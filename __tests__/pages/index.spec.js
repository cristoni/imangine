import React from 'react';
import Index from '../../pages/index';

test('Index renders the main page', () => {
  const wrapper = shallow(<Index />);
  expect(wrapper).toMatchSnapshot();
});