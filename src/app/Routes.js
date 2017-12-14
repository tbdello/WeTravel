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
import UploadForm from '../experience/UploadForm';
import MyExp from '../home/MyExp';
import Search from '../search/Search';

export default () => (
  <Switch>
    <Route path="/auth" render={() => <Auth />} />;
    <PrivateRoute exact path="/" component={Home} />;
    <PrivateRoute exact path="/upload" component={UploadForm} />;
    <PrivateRoute exact path="/search" component={Search} />;
    <PrivateRoute path="/experiences/:id" render={({ match }) => <Experience id={match.params.id} />} />
    <PrivateRoute exact path="/MyExperiences" component={MyExp} />;
    <Redirect to="/" />
  </Switch>
);
