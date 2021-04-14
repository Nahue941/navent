import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import NotFound from '../../components/NotFound'; // ruta publica


//falta la lógica del estado del user para manejar lo que se ve y lo que no, está hardcodeado
const Router = () => {
    
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);


    return (
        <div>
            
            {user?.id ? <PrivateRoute/> : <AuthRoute/>}
            
            <Route path="/404" render={() => <NotFound />} />
            
            
        </div>
    )
}

export default Router
