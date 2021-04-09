import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TestContainer from '../../containers/OneTestContainer'; //ruta privada
import AllTestContainer from '../../containers/AllTestsContainer'; //ruta privada
import Results from '../../components/Results'; // ruta privada
const PrivateRoute = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/login" to="/test" />
        <Route
          path="/test/:id"
          render={({ match }) => <TestContainer testId={match.params.id} />}
        />
        <Route path="/test" render={() => <AllTestContainer />} />
        <Route path="/results" render={() => <Results />} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default PrivateRoute;
