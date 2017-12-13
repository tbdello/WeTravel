import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends PureComponent {
  
  render() {
    return (
      <header>
        <h1>iTravel</h1>
        <nav>
          <span><NavLink to="/home">Home</NavLink></span>&nbsp;
          <span><NavLink to="/search">Search</NavLink></span>&nbsp;
          <span><NavLink to="/upload">Upload</NavLink></span>&nbsp;
          
        </nav>
      </header>
    );
  }
}

export default connect(
  null,
  null
)(Header);