import React, { PureComponent } from 'react';
import Feed from './Feed';
import { connect } from 'react-redux';
import { loadExpByUser } from '../experience/actions';
import { UpdateProfile } from '../auth/actions';

const defaultImg = 'http://www.beautythis.com/themes/comb/img/avatar/default-avatar-male_11.png';
class Home extends PureComponent {
  
  state={ shouldDisplay: false }


  handleUserUpdate = event =>{
    event.preventDefault();
    const form = event.target;
    const profile = new FormData(form);
    form.reset();
    this.props.UpdateProfile(profile);
  }

  render() {
    return (
      <div>
        <div className="card">
          <header className="card-header">
            <p class="card-header-title">
              {this.props.user.name}
            </p>
          </header>
          <div className="card-image">
            <figure className="image is-128x128">
              <img style={{ borderRadius: '50%', objectFit:'cover' }} alt='avatar' src={this.props.user.imageURI|| defaultImg}/>
            </figure>
          </div>
          <footer className="card-footer">
            <button className="button" onClick={()=>{
              this.state.shouldDisplay
                ? this.setState({ shouldDisplay: false })
                : this.setState({ shouldDisplay: true });
            }}>
              Edit Profile
            </button>
          </footer>
        </div>
        <Feed/>
      </div>
    );
  }
} 
export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser, UpdateProfile }
)(Home);