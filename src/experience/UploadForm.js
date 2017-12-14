import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExperience } from './actions';
import { Redirect } from 'react-router-dom';

export class UploadForm extends PureComponent {
  
  state={
    redirect: false
  }

  handleExpPost = event => {
    event.preventDefault();
    const { elements } = event.target;
    const exp = {
      title: elements.title.value,
      description: elements.description.value,
      location: elements.location.value,
      user: this.props.user._id,
      tags: elements.tags.value.split(' ')
    };
    console.log(exp.tags);
    this.props.addExperience(exp);
    this.setState({ redirect: true });
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleExpPost}>
            <input name="title" placeholder="title"/>
            <input name="description" placeholder="description"/>
            <input name="location" placeholder="location"/>
            <input name="tags" placeholder="tags"/>
            <button type="submit">Add</button>
          </form> 
          { this.state.redirect && (<Redirect to="/MyExperiences"/>) }
        </div>
      </div>
    );
  }
}

export default connect( 
  state => ({ user: state.auth.user }),
  { addExperience }
)(UploadForm);
