import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TestContainer from '../../containers/OneTestContainer'; //ruta privada
import AllTestContainer from '../../containers/AllTestsContainer'; //ruta privada
import Results from "../../components/Results";// ruta privada
import NotFound from '../../components/NotFound'; // ruta publica

const PrivateRoute = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/test" />
        <Route
          path="/test/:id"
          render={({ match }) => <TestContainer testId={match.params.id} />}
        />
        <Route path="/test:id" render={() => <Redirect to="/404" />} />
        <Route path="/404" render={()=> <NotFound/>}/>
        <Route path="/test" render={() => <AllTestContainer />} />
        <Route path="/results" render={() => <Results />} />

      </Switch>
    </div>
  );
};

export default PrivateRoute;
{/* <Route path="/404" render={() => <NotFound />} />
<Route path="/*" render={() => <Redirect to="/404" />} /> */}