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
      <div style={{ display:'flex', marginLeft:'18%' }}>
        <FeedDiv>
          {this.props.feed.filter(exp => exp.images.length > 0).map(exp =>(
            <Link key={exp._id} to={`experiences/${exp._id}`}>
              <StyledImg src={exp.images[0].imageURI} alt={exp.images[0].caption}/>
            </Link>
          ))}
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
height: 100px;
display: grid;
grid-template-areas: "a a a";
grid-gap: 10px;
grid-auto-columns: 200px;

`;