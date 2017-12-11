import React, { PureComponent } from 'react';
import Feed from './Feed';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Hey User</h1>
        <Feed/>
      </div>
    );
  }
}

export default Home;