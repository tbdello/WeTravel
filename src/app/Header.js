import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signout } from '../auth/actions';

class Header extends PureComponent {
  
  render() {
    return (
      <div className="header">
        <nav className="navbar is-white">
          <div className="navbar-brand">
            <a className="navbar-item is-marginless" href="https://i-travel.herokuapp.com/">
              <img src={require('../resources/logo.png')} alt="iTravel: an image based travel social media site"/>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                <NavLink to="/home">iTravel</NavLink>
              </a>
              <a className="navbar-item">
                <NavLink to="/search">Search</NavLink>
              </a>
              <a className="navbar-item">
                <NavLink to="/upload">Upload</NavLink>
              </a>
              <a className="navbar-item">
                <NavLink to="/MyExperiences">My Experiences</NavLink>
              </a>
              { this.props.user 
                ? <a className="navbar-item"><NavLink to="/" onClick={this.props.signout}>Logout</NavLink></a>
                : <a className="navbar-item"><NavLink to="/auth/signin">Login</NavLink></a>
              }
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  { signout }
)(Header);