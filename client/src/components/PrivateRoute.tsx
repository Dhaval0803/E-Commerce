import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RoutePaths } from '../utils/enum';


const PrivateRoute = ({ component: Component, path }: RouteProps) => {
  // if (!authContext.user.id) {
  //   return <Redirect to={RoutePaths.Login} />;
  // }

  return <Route component={Component} path={path} />;
};

export default PrivateRoute;