import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";

import CardPage from '~/pages/card';

const CardRouter = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/card/:id`}>
        <CardPage />
      </Route>
    </Switch>
  );
};

export default CardRouter;
