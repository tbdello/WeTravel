import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from '../home/Home';
import Auth from '../auth/Auth';
import PrivateRoute from './PrivateRoute';
import Experience from '../experience/Experience';


export default () => (
  <Switch> 
    <Route path="/auth" render={() => <Auth/>}/>;
    <PrivateRoute exact path="/" component={Home}/>;
    <PrivateRoute path="/experiences/:id" render={({ match }) => <Experience id={match.params.id}/>}/>
    <Redirect to="/"/>
  </Switch>  
);
