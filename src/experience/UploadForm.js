import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addExperience } from './actions';
import { Redirect } from 'react-router-dom';

// pull out repeated things like this
const FieldControl = ({ children }) => (
  <div className="field">
    <div className="control">
      {this.children}
    </div>
  </div>
);

export class UploadForm extends PureComponent {
  state = {
    redirect: false
  };

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
    // you need to wait and see if action was successful
    this.props.addExperience(exp).then(() => {
      // this is hokey, for programmatic change, 
      // use history.push (from router)
      this.setState({ redirect: true });
    });
  };

  render() {
    // this shouldn't be buried at the bottom of the component
    if(this.state.redirect) return <Redirect to="/MyExperiences"/>;

    return (
      <div>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                New Experience
              </h1>
              <h2 className="subtitle">
                Enter Details
              </h2>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="tile">
            <form onSubmit={this.handleExpPost}>
              <FieldControl>
                <input
                  name="title"
                  className="input"
                  type="text"
                  placeholder="Title"
                />
              </FieldControl>
              <FieldControl>
                <input
                  name="description"
                  className="input"
                  type="text"
                  placeholder="Description"
                />
              </FieldControl>
              <FieldControl>
                <input
                  name="location"
                  className="input"
                  type="text"
                  placeholder="Location"
                />
              </FieldControl>
              <FieldControl>
                <input
                  name="tags"
                  className="input"
                  type="text"
                  placeholder="Tags"
                />
              </FieldControl>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ user: state.auth.user }), { addExperience })(
  UploadForm
);
