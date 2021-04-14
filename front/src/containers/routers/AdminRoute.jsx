import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../../components/NotFound'; // ruta publica

const AdminRoute = () => {
    return (
        <div>
            <h3>Admin</h3>
            <Switch>
            <Redirect exact from="/" to="admin/skills" />
            </Switch>
        </div>
    )
}

export default AdminRoute;