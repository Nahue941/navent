import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../../components/NotFound'; // ruta publica
import AdminRoute from './AdminRoute';
//falta la lógica del estado del user para manejar lo que se ve y lo que no, está hardcodeado
const Router = () => {

    const loggedUser = {
      auth: true,
      admin: false
    }

    return (
        <div>
            
            {loggedUser.auth? <PrivateRoute/> : <Redirect to="/404" />}
            {loggedUser.admin? <AdminRoute/> : <Redirect to="/404" />}

            <PublicRoute/>
            
            <Route path="/404" render={() => <NotFound />} />
            
        </div>
    )
}

export default Router
