import React from 'react';

import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Search from '../search/Search';

describe('Search', () => {

  it('shows the Search component', () => {
    const wrapper = shallow(<Search />);
    console.log(toJSON(wrapper));
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});