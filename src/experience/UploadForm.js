import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExperience } from './actions';
//import { Redirect } from 'react-router-dom';

export class UploadForm extends PureComponent {
  
  state={
    redirect: false
  }

  handleAdd = exp => {
    this.props.addExperience(exp);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { elements } = event.target;
    const exp = {
      title: elements.title.value,
      description: elements.description.value,
      location: elements.location.value,
      user: this.props.user._id
    };
    this.setState({ redirect: true });
    this.handleAdd(exp);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="title" placeholder="title"/>
          <input name="description" placeholder="description"/>
          <input name="location" placeholder="location"/>
          <button type="submit">Add</button>
        </form> 
        {/* { this.state.redirect && (<Redirect to="/categories"/>) } */}
      </div>
    );
  }
}

export default connect( 
  state => ({ user: state.auth.user }),
  { addExperience }
)(UploadForm);
