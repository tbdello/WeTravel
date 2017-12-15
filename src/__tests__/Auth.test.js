import React from 'react';

import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Auth from '../auth/Auth';

describe('Auth', () => {

  it('shows the Auth component', () => {
    const wrapper = shallow(<Auth />);
    console.log(toJSON(wrapper));
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});