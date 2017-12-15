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
        <div>
          <img style={{ borderRadius: '50%', objectFit:'cover', width:'100px', height:'100px' }} alt='avatar' src={this.props.user.imageURI|| defaultImg}/>
          <h1>Hey {this.props.user.name}</h1>
          <button className="button" onClick={()=>{
            this.state.shouldDisplay
              ? this.setState({ shouldDisplay: false })
              : this.setState({ shouldDisplay: true });
          }}> EditProfile </button>
        </div>
        <div>
          { this.state.shouldDisplay &&
          <form onSubmit={this.handleUserUpdate}> 
            <input
              type="file"
              name="image"
              accept=".jpg, .jpeg, .png, .svg" 
            />
            <input name="name" defaultValue={this.props.user.name}/>
            <input name="email" defaultValue={this.props.user.email}/>
            <button type="submit">Add</button>
          </form>
          } 
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