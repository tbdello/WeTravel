import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './actions';
import { Redirect } from 'react-router-dom';

export class UploadForm extends PureComponent {
  
  state={
    redirect: false
  }

  handleAdd = experience => {
    this.props.addExperience(experience);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { elements } = event.target;
    const category = {
      title: elements.name.value,
      description: elements.description.value,
      images:[]
    };
    this.setState({ redirect: true });
    this.handleAdd(category);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="title" placeholder="title"/>
          <input name="description" placeholder="description"/>
          <button type="submit">Add</button>
        </form> 
        { this.state.redirect && (<Redirect to="/categories"/>) }
      </div>
    );
  }
}

export default connect( 
  state => ({ categories: state }),
  { addCategory }
)(UploadForm);
