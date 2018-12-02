import React from 'react';
import FilesList from '../../components/files-list';

test('FilesList renders the uploaded files list', () => {
  let wrapper = shallow(<FilesList />);
  expect(wrapper).toMatchSnapshot();

  const mockFiles = [
    { name: 'file1' },
    { name: 'file2' },
    { name: 'file3' }
  ];

  wrapper = shallow(<FilesList files={mockFiles} />);
  expect(wrapper).toMatchSnapshot();
});