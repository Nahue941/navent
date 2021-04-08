import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../../components/NotFound'; // ruta publica

const AdminRoute = () => {
    return (
        <div>
            <h3>Admin</h3>
            <Switch>
            <Route path="/404" render={() => <NotFound />} />
            <Route path="/*" render={() => <Redirect to="/404" />} />
            </Switch>
        </div>
    )
}

export default AdminRoute;