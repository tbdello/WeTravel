import React, { PureComponent } from 'react';
import Feed from './Feed';
import { connect } from 'react-redux';
import { loadExpByUser } from '../experience/actions';
import { UpdateProfile } from '../auth/actions';

const defaultImg = 'http://www.beautythis.com/themes/comb/img/avatar/default-avatar-male_11.png';
export class Home extends PureComponent {
  
  state={ shouldDisplay: false }

  handleUserUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const profile = new FormData(form);
    form.reset();
    this.props.UpdateProfile(profile);
  };

  render() {
    return (
      <div>
        <section class="hero is-dark">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">iTravel</h1>
              <h2 class="subtitle">Slogan</h2>
            </div>
          </div>
        </section>
        <div className="columns">
          <div className="column is-one-fifth">
            <div>
              <h2 className="title has-text-centered">{this.props.user.name}</h2>
              <div className="image">
                <figure className="image is-412x412">
                  <img
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                    alt="avatar"
                    src={this.props.user.imageURI || defaultImg}
                  />
                </figure>
              </div>
              <div></div>
              <div className="buttons is-centered">
                <button
                  className="button"
                  onClick={() => {
                    this.state.shouldDisplay
                      ? this.setState({ shouldDisplay: false })
                      : this.setState({ shouldDisplay: true });
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div>
              <form onSubmit={this.handleUserUpdate}>
                <div className="control">
                  <div class="file">
                    <label class="file-label">
                      <input
                        type="file"
                        name="image"
                        accept=".jpg, .jpeg, .png, .svg"
                      />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fa fa-upload" />
                        </span>
                        <span class="file-label">Choose a file…</span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="control">
                  <input className="input" name="name" placeHolder="Name" />
                </div>
                <div className="control">
                  <input className="input" name="email" placeHolder="E-mail" />
                </div>
                <div className="buttons is-centered">
                  <button type="submit">Update</button>
                </div>
              </form>
            </div>
          </div>
          <div className="column is-four-fifths is-light">
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser, UpdateProfile }
)(Home);
