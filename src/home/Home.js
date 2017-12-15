import React, { PureComponent } from 'react';
import Feed from './Feed';
import { connect } from 'react-redux';
import { loadExpByUser } from '../experience/actions';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Hey {this.props.user.name}</h1><img src=""/*{user.imageURI}*/ alt="profile picture"/>
        <Feed/>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser }
)(Home);