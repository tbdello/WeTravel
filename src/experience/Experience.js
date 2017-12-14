import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadExp } from './actions';
import { addImageToExp } from './actions';
import styled from 'styled-components';


class Experience extends PureComponent {

  state = { 
    index: 0, 
    gallery:[]
  }

  componentDidMount() {
    this.props.loadExp(this.props.id);
  }

  handleClick = (value) => {
    console.log('clicked');
    const newState = {
      ...this.state,
      index: this.state.index + value
    };
    this.setState(newState);
  }

  handleImgPost = event =>{
    event.preventDefault();
    const { elements } = event.target;
    const image = {
      imageURI: elements.imageUri.value,
      caption: elements.caption.value,
    };
    this.props.addImageToExp(this.props.id, image);
  }

  searchedExp = () => {
    return this.props.exp.find(exp => exp._id === this.props.id);
  }
    
  
  render() {
    
    if(!this.searchedExp()) return <div>no such experience has been posted yet</div>;
    return (
      <div>
        <h1>Hey {this.props.user.name} Welcome to Experience page</h1>
        <h3>title is: {this.searchedExp().title}</h3>
        <h5>Location:  {this.searchedExp().location} </h5> 
        {/* {(this.searchedExp().images)
          ?(<ul>
            {this.searchedExp().images.map(image => (
              <li key={image._id}>
                <img src ={image.imageURI} alt={image.caption}/>
                <h5> {image.caption} </h5>
              </li>
            ))}
          </ul>)
          :<div> No images uploaded yet </div>
        } */}
        <StyledDiv>
          {(this.searchedExp().images)
            ?(<div>
              {this.searchedExp().images.map((img, i) => (
                <ImgDiv key={img._id} shouldDisplay ={this.state.index === i}>
                  {/* <DeleteDiv onClick={() => this.handleDelete(img._id)}>X</DeleteDiv> */}
                  <img style={{ width:'100%' }} src={img.imageURI} alt={img.caption}/>
                  <span> {img.caption} </span>
                  { i !== this.state.gallery.length -1 && <span onClick ={()=> this.handleClick(1)}> next </span>}
                  {i !== 0 && <span onClick ={()=> this.handleClick(-1)}> previous</span>}
                </ImgDiv>
              ))}
            </div>)
            :<div> No images uploaded yet </div>
          }
        </StyledDiv>
        <div>
          Tags:
          {this.searchedExp().tags && this.searchedExp().tags.map((tag, i) =>(<span key={i}>  {tag} </span>))}
        </div>
        <div>
          <h4>Time to add some images!</h4>
          <form onSubmit={this.handleImgPost}> 
            <input name="imageUri" placeholder="ImageUrI"/>
            <input name="caption" placeholder="caption"/>
            <button type="submit">Add</button>
          </form> 
        </div>
      </div>
    );
  }
}

const StyledDiv = styled.div`
display: 'flex';
`;

const ImgDiv = styled.div`
display:${props => props.shouldDisplay ? 'flex' : 'none'};
flex-direction: column;
margin: 0 10%;
`;

const DeleteDiv = styled.div`
margin-left: 90%;
text-align: center;
border: 1px solid black;
`;

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExp, addImageToExp }
)(Experience); 