import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
        </nav>
      </header>
    );
  }
}

export default connect(
  null,
  null
)(Header);