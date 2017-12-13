import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadExpByUser } from '../experience/actions';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  componentDidMount() {
    this.props.loadExpByUser(this.props.user._id);
  }
  render() {
    const expByUser = this.props.user.experiences;
    return (
      <div>
        <ul>
          <h4>Here are Experiences you've shared</h4>
          {expByUser.map(exp =>(
            <li key={exp._id}>
              <Link to={`experiences/${exp._id}`}> <h5>{exp.title}</h5></Link>
            </li>
          ))}
        </ul> 
      </div>   
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser }
)(Home);