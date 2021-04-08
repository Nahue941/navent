import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../../components/Login'; // esto es una ruta publica
import Register from '../../components/Register';
import NotFound from '../../components/NotFound'; // ruta publica
// import Inicio from '../../components/Inicio'; // falta un componente inicio para mostrar cuando no estamos logueados?

const PublicRoute = () => {
    return (
        <div>
            <Switch>            
            <Route path="/login" render={() => <Login />} />            
            <Route path="/register" component={Register} />
            <Route exact path="/" render={() => <div>Inicio</div>} />

            </Switch>
        </div>
    )
}

export default PublicRoute
