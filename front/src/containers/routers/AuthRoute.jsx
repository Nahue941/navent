import React from 'react';
import { Switch, Route , Redirect} from 'react-router-dom';
import Login from '../../components/Login'; 
import Register from '../../components/Register';
import Home from '../../components/Home';

const AuthRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
        <Route exact path="/" render={() => <Home />} />
        <Redirect to="/404"/>

      </Switch>
    </div>
  );
};

export default AuthRoutes;
