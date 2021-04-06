import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../../components/NotFound'; // ruta publica

const Router = () => {

    const loggeduser = false

    return (
        <div>
            <Switch>
            {loggeduser? <PrivateRoute/> : <Redirect to="/404" />}
            <PublicRoute/>
            <Route path="/404" render={() => <NotFound />} />
            </Switch>
        </div>
    )
}

export default Router
