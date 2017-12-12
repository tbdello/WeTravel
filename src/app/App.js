import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './Header'; 
import Error from './Error';
import Loading from './Loading';
import Home from '../home/Home';
import Search from '../search/Search';
import UploadForm from '../upload/UploadForm';
import { checkForToken } from '../auth/actions';

class App extends PureComponent {

  componentDidMount() {
    this.props.checkForToken();
  }
  
  render() {
    const { loading, error, checkedToken } = this.props;

    return (
      <Router>
        { checkedToken && 
        <div className="App">
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component = {Home}/>
              {/* <Route exact path="/search" component = {Search}/>
              <Route exact path="/upload" component = {UploadForm}/> */}
              <Redirect to="/"/>
            </Switch>
            <Loading loading={loading}/>
            <Error error={error}/>
          </main>
        </div>
        }
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    user: state.auth.user,
    checkedToken: state.auth.checkedToken,
    loading: state.loading,
    error: state.error
  }),
  { checkForToken }
)(App);
