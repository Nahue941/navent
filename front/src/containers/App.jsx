import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TestContainer from './testContainer';
import SubjectsContainer from './subjectsContainer';

const App = () => {
  return (
    
      <Switch>
        <Route path="/test" render={() => <TestContainer />} />
        <Route path="/subjects" render={() => <SubjectsContainer />} />
        <Route exact path="/" render={() => <div>Inicio</div>} />
        <Route path="/404" render={() => <div>Página no encontrada</div>} />
        <Redirect to="/404" />
      </Switch>

  );
};

export default App;
