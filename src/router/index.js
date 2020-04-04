import React from 'react';
import { Switch, Route } from "react-router-dom";

// page components...
import HomePage from '~/pages/home';
import LoginPage from '~/pages/login';
import BoardPage from '~/pages/board';
import { NotFoundPage } from '~/pages/error';

const Router = () => {
  return (
    <Switch>
      <Route
        component={HomePage}
        path="/"
        exact 
      />
      <Route
        component={LoginPage}
        path="/login" 
      />
      <Route
        component={BoardPage}
        path="/board/:id"
      />
      <Route
        component={NotFoundPage}
        path="*" 
      />
    </Switch>
  );
};

export default Router;