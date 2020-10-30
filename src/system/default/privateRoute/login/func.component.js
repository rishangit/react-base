import React, { useState, useEffect } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { Urls } from '../../../common/constant';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const session = localStorage.getItem('session');

  if(!session){
    localStorage.setItem('redirectPath',location.pathname);
  }

  return (
    <Route
      {...rest}
      render={props => {
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
