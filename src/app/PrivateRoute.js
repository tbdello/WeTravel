import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends PureComponent {
  render() {
    const { Component, render, user, ...rest } = this.props;
    return(
      <Route {...rest} render={props => {
        if(user) {
          console.log('user is with render', user, render);
          return render ? render(props) : <Component {...props}/>;
        }
        console.log('we sholdnt be here');
        return (
          <Redirect to={{
            pathname: '/auth/signin',
            state: { from: props.location.pathname }
          }}/>
        );
      }}/>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  null,
  (stateProps, dispatchProps, ownProps) => ({ 
    user: stateProps.user,
    Component: ownProps.component
  })
)(PrivateRoute);