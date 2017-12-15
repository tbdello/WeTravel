import React from 'react';

import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Experience from '../experience/Experience';

describe('Experience', () => {

  it('shows the Experience component', () => {
    const wrapper = shallow(<Experience />);
    console.log(toJSON(wrapper));
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});