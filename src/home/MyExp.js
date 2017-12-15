import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadExpByUser, deleteExp } from '../experience/actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Home extends PureComponent {
  componentDidMount() {
    this.props.loadExpByUser(this.props.user._id);
  }

  handleDelete = (id) => {
    this.props.deleteExp(id);
  }
  render() {
    const expByUser = this.props.user.experiences;
    if(!expByUser) return(<div></div>);
    return (
      <div>
        {expByUser.map((exp,i) =>(
          <article key={i} className="media">
            {exp.images && exp.images[0] &&
              <Link to={`experiences/${exp._id}`}>
                <figure className="image is-96x96">
                  <img src={exp.images[0].imageURI} alt={exp.images[0].caption}/>
                </figure>
              </Link>}
            <div className="media-content">
              <div className="content">
                <button className="delete" onClick={()=>this.handleDelete(exp._id)}>
                  x
                </button> 
              </div>
            </div>  
          </article>))}
      </div>   
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser, deleteExp }
)(Home);