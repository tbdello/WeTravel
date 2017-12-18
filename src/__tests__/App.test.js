import React from 'react';

import { shallow } from 'enzyme';

import { App } from '../app/App';

describe('App', () => {

  it('shows the App component', () => {
    const checkedToken = 'test';
    const loading = false;
    const error = null;
    const checkForToken = () => {};

    // You want to test main different conditions:
    // 1) has an error
    // 2) is loading
    // 3) no error, not loading
    const wrapper = shallow(
      <App 
        checkedToken={checkedToken}
        loading={loading} 
        error={error} 
        checkForToken={checkForToken}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});