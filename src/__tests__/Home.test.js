import React from 'react';

import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Home from '../home/Home';

describe('Home', () => {

  it('shows the Home component', () => {
    const wrapper = shallow(<Home />);
    console.log(toJSON(wrapper));
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});