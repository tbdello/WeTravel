import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class Search extends PureComponent {


  render() {
    const searchedExp = this.props.exp.find(exp => exp._id === this.props.id);
    if (!searchedExp) return <div>no such experience has been posted yet</div>;

    return (
      <div>
        <h1>Hey {this.props.user.name} Welcome to Experience page</h1>
        <h3>title is: {searchedExp.title}</h3>
        <h5>Location:  {searchedExp.location} </h5>
        {(searchedExp.images)
          ? (<ul>
            {searchedExp.images.map(image => (
              <li key={image._id}>
                <img src={image.imageURI} alt={image.caption} />
                <h5> {image.caption} </h5>
              </li>
            ))}
          </ul>)
          : <div> No images uploaded yet </div>
        }
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  {  }
)(Search); 
