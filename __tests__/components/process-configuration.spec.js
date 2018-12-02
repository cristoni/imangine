import React from 'react';
import ProcessConfiguration from '../../components/process-configuration';

test('ProcessConfiguration renders the process configuration panel for uploaded images', () => {
  let wrapper = shallow(<ProcessConfiguration />);
  expect(wrapper).toMatchSnapshot();

  const mockFiles = [
    { name: 'file1' },
    { name: 'file2' },
    { name: 'file3' }
  ];

  wrapper = shallow(<ProcessConfiguration files={mockFiles} />);
  expect(wrapper).toMatchSnapshot();
});