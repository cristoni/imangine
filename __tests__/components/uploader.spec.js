import React from 'react';
import Uploader from '../../components/uploader';
import Dropzone from 'react-dropzone';

test('Uploader renders the file uploader', () => {
  const wrapper = shallow(<Uploader />);
  expect(wrapper).toMatchSnapshot();

  const dropzone = wrapper.find(Dropzone);
  expect(dropzone).toExist();
});