import React from 'react';
import Home from '../pages/Home';
import Result from '../pages/Result';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/:usuario" render={(props) => <Result {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
