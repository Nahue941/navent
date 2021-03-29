import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TestContainer from './OneTestContainer';
import AllTestContainer from './AllTestsContainer';

const App = () => {
  return (
    <div>     
      <Switch>
        <Redirect exact from="/" to="/test" />
        <Route path="/test/:id" render={({match}) => <TestContainer id={match.params.id}/>} />
        <Route path="/test" render={() => <AllTestContainer />} />
        <Route exact path="/" render={() => <div>Inicio</div>} />
        <Route path="/404" render={() => <div>Página no encontrada</div>} />
        <Redirect to="/404" />
      </Switch>
      </div> 
  );
};

export default App;
