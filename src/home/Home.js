import React, { PureComponent } from 'react';
//import Feed from './Feed';
import { connect } from 'react-redux';
import { loadExpByUser } from '../experience/actions';
import PostedExp from './PostedExp';

class Home extends PureComponent {
  componentDidMount() {
    this.props.loadExpByUser(this.props.user._id);
  }

  render() {
    return (
      <div>
        <h1>Hey {this.props.user.name}</h1>
        {/* <Feed/> */}
        {this.props.user.experiences.length !== 0 && <PostedExp/>}
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser }
)(Home);