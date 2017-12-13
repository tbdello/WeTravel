import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadExp } from './actions';
import { addImageToExp } from './actions';


class Experience extends PureComponent {
  componentDidMount() {
    this.props.loadExp(this.props.id);
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
        {(this.searchedExp().images)
          ?(<ul>
            {this.searchedExp().images.map(image => (
              <li key={image._id}>
                <img src ={image.imageURI} alt={image.caption}/>
                <h5> {image.caption} </h5>
              </li>
            ))}
          </ul>)
          :<div> No images uploaded yet </div>
        }
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

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExp, addImageToExp }
)(Experience); 