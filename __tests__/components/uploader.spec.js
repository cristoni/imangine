import React from 'react';
import Uploader from '../../components/uploader';
import Dropzone from 'react-dropzone';

test('Index renders the main page', () => {
  const wrapper = mount(<Uploader />);
  expect(wrapper).toMatchSnapshot();

  // const fileContents = "file contents";
  // const fpng = new Blob([fileContents], { type: "image/png" });
  // const fjpg = new Blob([fileContents], { type: "image/jpeg" });
  // const ftxt = new Blob([fileContents], { type: "text/plain" });
  console.log(wrapper.find('.dropzone'));
  expect(wrapper.find('.dropzone')).to.have.lengthOf(1);
  // wrapper.find(Dropzone).simulate("drop", { dataTransfer: { files: [fpng, fjpg, ftxt] } });
});