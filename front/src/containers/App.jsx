import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TestContainer from './testContainer';
import SubjectsContainer from './subjectsContainer';

const App = () => {
  return (
    
      <Switch>
        <Route path="/test" render={() => <TestContainer />} />
        <Route path="/subjects" render={() => <SubjectsContainer />} />
        <Route exact path="/" render={() => <div>Inicio</div>} />
        <Route path="/*" render={() => <div>Página no encontrada</div>} />
      </Switch>

  );
};

export default App;
