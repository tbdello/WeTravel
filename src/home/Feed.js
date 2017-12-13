import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadFeed } from './actions';
import { Link } from 'react-router-dom';

class Feed extends PureComponent {

  componentDidMount() {
    this.props.loadFeed();
  }

  render() {
    if(!this.props.feed) return <div>No Experiences have been posted yet</div>;
    
    return (
      <div>
        <ul>
          {this.props.feed.map(exp =>(
            <div key={exp._id}>
              <div>
                <Link to={`experiences/${exp._id}`}> <h5>{exp.title}
                </h5></Link>
              </div>
              {exp.images[0] && <img src={exp.images[0].imageURI} alt={exp.images[0].caption}/>}
            </div>
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