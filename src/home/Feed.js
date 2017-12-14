import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadFeed } from './actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../mystyles.css';

class Feed extends PureComponent {

  componentDidMount() {
    this.props.loadFeed();
  }

  render() {
    if(!this.props.feed) return <div>No Experiences have been posted yet</div>;
    
    return (
      <div style={{ display:'flex', justifyContent: 'center' }}>
        <FeedDiv>
          <ul>
            {this.props.feed.map(exp =>(
              <div key={exp._id}>
                {exp.images[0] && <Link to={`experiences/${exp._id}`}>
                  <StyledImg src={exp.images[0].imageURI} alt={exp.images[0].caption}/>
                </Link>}
              </div>
            ))}
          </ul>
        </FeedDiv>
      </div>
    );
  }
}

export default connect(
  state => ({ feed: state.feed }),
  { loadFeed }
)(Feed);

const StyledImg = styled.img`
width: 100%;
margin: 1% 0;
`;

const FeedDiv = styled.div`
margin-left: 50px;
display: grid;
grid-gap: 1%;
grid-template-columns: repeat(3, 33%);
grid-template-rows: repeat(3, 33%);
width: 400px;
height: 550px;
align-content: space-evenly;
justify-content: space-evenly;
`;