import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadExp } from './actions';

class Experience extends PureComponent {
  componentDidMount() {
    this.props.loadExp(this.props.id);
  }
  
  render() {
    if(!this.props.exp[0]) return <div>no such experience has been posted yet</div>;
    
    console.log('exp is',this.props.exp);

    return (
      <div>
        <h1>Hey {this.props.user.name} Welcome to Experience page</h1>
        <h5>Location:  {this.props.exp.location} </h5> 
        <ul>
          {this.props.exp[0].images.map(image => (
            <li key={image._id}>
              <img src ={image.url} alt={image.caption}/>
              <h5> {image.caption} </h5>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, exp: state.experience }),
  { loadExp }
)(Experience);