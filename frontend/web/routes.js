import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

export default (
  <Route name="app" path="/" handler={ App }>
    <Route name="login" path="login" handler={ Login } />
    <Route name="register" path="signup" handler={ Register } />
  </Route>
);