import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadExpByUser, deleteExp } from '../experience/actions';
import { Link } from 'react-router-dom';
import stock from './favicon.png';

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
        <h4>Here are Experiences you've shared</h4>
        <ul style={{ display: 'flex' }}>
          {expByUser.map((exp,i) =>(
            <div key={i}>
              {exp.images && exp.images[0] && 
              <div>
                <Link to={`experiences/${exp._id}`}><img style={{ objectFit:'cover',width: '200px',height: '120px', margin: '10px' }} src={exp.images[0].imageURI} alt={exp.images[0].caption}/></Link>
                <button className=" delete" onClick={()=>this.handleDelete(exp._id)}>x</button>
              </div>
              }
              {exp.images && !exp.images[0] &&
              <div>
                <div>
                  <Link to={`experiences/${exp._id}`}><img style={{ objectFit:'cover',width: '150px',height: '120px', margin: '10px' }} src={stock} alt='none'/></Link>
                  <button className=" delete" onClick={()=>this.handleDelete(exp._id)}>x</button>
                </div>
                <p style={{ textAlign:'center' }}>{exp.location}</p>
              </div>
              }
            </div>
          ))}
        </ul> 
      </div>   
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser, deleteExp }
)(Home);
