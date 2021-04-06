import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../../components/Login'; // esto es una ruta publica

const PublicRoute = () => {
    return (
        <div>
            
            <Route path="/login" render={() => <Login />} />            
            
        </div>
    )
}

export default PublicRoute
