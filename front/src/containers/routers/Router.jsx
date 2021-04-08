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
    admin: true,
  };

  return (
    <div>

        <Redirect from="/test/:id" to="/test" />
        <PublicRoute />

        {loggedUser.auth ? <PrivateRoute /> : <Redirect to="/404" />}
        <Redirect/>
        {loggedUser.auth ? <AdminRoute /> : <Redirect to="/404" />}


    </div>
  );
};

export default Router;
