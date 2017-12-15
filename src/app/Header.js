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
            <li>
              <NavLink className="navbar-item" to="/home">
                <img src={require('../resources/logo.png')} alt="iTravel logo" />
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/home">
                iTravel
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/search">
                Search
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/upload">
                Upload
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-item" to="/MyExperiences">
                My Experiences
              </NavLink>
            </li>
            {this.props.user ? (
              <li>
                <NavLink
                  className="navbar-item"
                  to="/"
                  onClick={this.props.signout}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink className="navbar-item" to="/auth/signin">
                  Login
                </NavLink>
              </li>
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
