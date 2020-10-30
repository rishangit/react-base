import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginComponent from './login';

const AuthComponent = props => {
  return (
    <Switch>
      <Route path="/login" component={LoginComponent} />
      <Redirect from={'/'} to={'/login'} />
    </Switch>
  );
};
export default AuthComponent;
