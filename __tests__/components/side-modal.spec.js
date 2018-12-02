import React from 'react';
import SideModal from '../../components/side-modal';

test('SideModal renders its children when is open', () => {
  let wrapper = mount(<SideModal open={false}><div id="child" /></SideModal>);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.find("#child").length).toBe(0);

  wrapper = mount(<SideModal open={true}><div id="child" /></SideModal>);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.find("#child").length).toBe(1);
});