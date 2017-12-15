import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadSearch } from './actions';

class Search extends PureComponent {
  handleSearch = event => {
    console.log('searching');
    event.preventDefault();
    const { elements } = event.target;
    const query = `?location=${elements.location.value}&tag=${
      elements.tag.value
    }`;
    this.props.loadSearch(query);
  };

  render() {
    return (
      <div>
        <h1>
          Hey {this.props.user.name}
          <br /> Please enter your Search
        </h1>
        <form onSubmit={this.handleSearch}>
          <div className="field">
            <label className="label">Location</label>
            <div className="control">
              <input className="location" placeholder="location" />
            </div>
          </div>
          <div className="field">
            <label className="label">Tag</label>
            <div className="control">
              <input className="tag" placeholder="tag" />
            </div>
          </div>
          <button type="submit">Search</button>
        </form>
        {this.props.search.length !== 0 ? (
          <div>
            <ul>
              {this.props.search.map(exp => (
                <div key={exp._id}>
                  <div>
                    <Link to={`experiences/${exp._id}`}>
                      {' '}
                      <h5>{exp.title}</h5>
                    </Link>
                  </div>
                  {exp.images[0] && (
                    <img
                      src={exp.images[0].imageURI}
                      alt={exp.images[0].caption}
                    />
                  )}
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <div> No results </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, search: state.search }),
  { loadSearch }
)(Search);
