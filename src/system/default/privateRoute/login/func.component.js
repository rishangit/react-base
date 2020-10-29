import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Urls } from '../../../common/constant';
const PrivateRoute = ({ component: Component, ...rest }) => {
  debugger;
  return (
    <Route
      {...rest}
      render={props => {
        const session = localStorage.getItem('session');
        console.log('session', session);
        return session ? (
          <Component {...props} />
        ) : (
          <Redirect to={Urls.login} />
        );
      }}
    />
  );
};

export default PrivateRoute;
