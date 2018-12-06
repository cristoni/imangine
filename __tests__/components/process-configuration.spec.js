import React from 'react';
import ProcessConfiguration from '../../components/process-configuration';

test('ProcessConfiguration renders the process configuration panel for uploaded images', () => {
  let wrapper = shallow(<ProcessConfiguration />);
  expect(wrapper).toMatchSnapshot();
});