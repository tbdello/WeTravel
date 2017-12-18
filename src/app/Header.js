import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signout } from '../auth/actions';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <NavLink className="navbar-item" to="/home">
              <img src={require('../resources/logo.png')} alt="iTravel logo" />
            </NavLink>
            <NavLink className="navbar-item" to="/home">
              iTravel
            </NavLink>
            <NavLink className="navbar-item" to="/search">
              Search
            </NavLink>            
            <NavLink className="navbar-item" to="/upload">
              Upload
            </NavLink>
            <NavLink className="navbar-item" to="/MyExperiences">
              My Experiences
            </NavLink>
            {this.props.user ? (
              <NavLink
                className="navbar-item"
                to="/"
                onClick={this.props.signout}
              >
                Sign Out
              </NavLink>
            ) : (
              <NavLink className="navbar-item" to="/auth/signin">
                Sign In
              </NavLink>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect(state => ({ user: state.auth.user }), { signout })(
  Header
);