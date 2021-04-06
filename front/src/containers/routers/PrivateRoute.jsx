import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TestContainer from './OneTestContainer'; //ruta privada
import AllTestContainer from './AllTestsContainer'; //ruta privada
import Results from "../components/Results";// ruta privada
const PrivateRoute = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/test" />
        <Route
          path="/test/:id"
          render={({ match }) => <TestContainer id={match.params.id} />}
        />
        <Route path="/test" render={() => <AllTestContainer />} />
        <Route path="/results/:id" render={() => <Results />} />
      </Switch>
    </div>
  );
};

export default PrivateRoute;
