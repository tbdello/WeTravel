import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadFeed } from './actions';
import { NavLink } from 'react-router-dom';

class Feed extends PureComponent {

  componentDidMount() {
    this.props.loadFeed();
  }

  render() {
    if(!this.props.feed) return <div>No Experiences have been posted yet</div>;
    
    return (
      <div>
        <ul>
          {this.props.feed.map(exp => (
            <li type="none" key={exp._id}>
              <NavLink to={`experience/${exp._id}`}> <h4> exp.title </h4> </NavLink>
              <NavLink to={`experience/${exp._id}`}> <img src={exp.img[0].url} alt={exp.img[0].caption} /> </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ feed: state.feed }),
  { loadFeed }
)(Feed);