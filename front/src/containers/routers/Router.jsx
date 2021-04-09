import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import NotFound from '../../components/NotFound'; // ruta publica
import { useSelector } from 'react-redux';

//falta la lógica del estado del user para manejar lo que se ve y lo que no, está hardcodeado
const Router = () => {
  const { isAuth } = useSelector((state) => state.user);
  return (
    <div>
      {isAuth ? <PrivateRoute /> : <AuthRoute />}
        <Route path="/404" component={NotFound} />
    </div>
  );
};

export default Router;
