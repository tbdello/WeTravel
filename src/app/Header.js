import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signout } from '../auth/actions';

class Header extends PureComponent {
  
  render() {
    return (
      <header className="hero">
        <h1 className="title">iTravel</h1>
        <nav className="breadcrumb" style={{ display:'flex', justifyContent:'flex-end' }} aria-label="breadcrumbs">
          <li><NavLink to="/home">Home</NavLink></li>&nbsp;
          <li><NavLink to="/search">Search</NavLink></li>&nbsp;
          <li><NavLink to="/upload">Upload</NavLink></li>&nbsp;
          <li><NavLink to="/MyExperiences">My Experiences</NavLink></li>&nbsp;
          { this.props.user 
            ? <li><NavLink to="/" onClick={this.props.signout}>Logout</NavLink></li>
            : <li><NavLink to="/auth/signin">Login</NavLink></li>
          }
        </nav>
      </header>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  { signout }
)(Header);