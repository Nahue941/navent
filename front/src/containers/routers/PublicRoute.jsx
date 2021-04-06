import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/Login'; // esto es una ruta publica

const PublicRoute = () => {
    return (
        <div>
            <Switch>
            <Route path="/login" component={Login} />            
            </Switch>
        </div>
    )
}

export default PublicRoute
