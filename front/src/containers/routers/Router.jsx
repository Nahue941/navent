import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import NotFound from '../../components/NotFound'; // ruta publica
import AdminRoute from './AdminRoute';

import LoadingSpinner from '../../components/UI/LoadingSpinner'// loading :v
import axios from 'axios';
//falta la lógica del estado del user para manejar lo que se ve y lo que no, está hardcodeado
const Router = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    
    const query = useQuery();

    useEffect(()=> {
        const token = query.get("token");
        if(token) {
            axios.get(`https://www.bumeran.com.ar/candidatos/curriculum/nameAndSkills?token_auto=${token}`, { withCredentials: true })
                .then((user) => {
                    //consulta al back si existe usuario en el back
                    console.log(user)
                    //si no existe crearlo



                    //cookie de user
                    //desarmar la cookie
                    //dispatch(cookie)

                })
        }
    }, []);


    return (
        <div>

            {user?.id ? (user.admin ? <AdminRoute /> : <PrivateRoute />) : <AuthRoute />}

            <Route path="/404" render={() => <NotFound />} />


        </div>
    )
}

export default Router