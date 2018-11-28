import React from 'react';
import Index from '../../pages/index';

test('Index renders the main page', () => {
  const wrapper = shallow(<Index />);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.state().files).toEqual([]);

  const mockAcceptedFiles = ['file', 'file', 'file'];
  const mockRejectedFiles = [];

  wrapper.instance().onDropHandler(mockAcceptedFiles, mockRejectedFiles);

  expect(wrapper.state().files).toEqual(mockAcceptedFiles);
  expect(wrapper).toMatchSnapshot();
});