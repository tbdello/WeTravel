import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from '../home/Home';
import Auth from '../auth/Auth';

//import PrivateRoute from './PrivateRoute';

export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Home/>}/>;
    <Route path="/auth" render={() => <Auth/>}/>
    <Redirect to="/auth"/>
  </Switch>  
);
