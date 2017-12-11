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

class App extends PureComponent {
  
  render() {
    const { loading, error } = this.props;

    return (
      <Router>
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
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error
  }),
  null
)(App);
