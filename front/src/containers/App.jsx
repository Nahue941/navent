import React from 'react';
import { Switch, Route } from 'react-router-dom';
import testContainer from './testContainer';
import subjectsContainer from './subjectsContainer';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/test" render={() => <testContainer />} />
        <Route path="/subjects" render={() => <subjectsContainer />} />
        <Route path="/*" render={() => <div>Página no encontrada</div>} />
      </Switch>
    </div>
  );
};

export default App;
