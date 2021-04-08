import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminRoute from './AdminRoute';
import NotFound from '../../components/NotFound'; // ruta publica
//falta la lógica del estado del user para manejar lo que se ve y lo que no, está hardcodeado
const Router = () => {
  const loggedUser = {
    auth: true,
    admin: false,
  };

  return (
    <div>
        {loggedUser.auth ? (<PrivateRoute />) : <Redirect to="/404" />}
        <PublicRoute />
      <Switch>
        {loggedUser.admin ? <AdminRoute /> : <Redirect to="/404" />}

      </Switch>
    </div>
  );
};

export default Router;
