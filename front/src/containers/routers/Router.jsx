import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logExternalUser } from '../../state/user/actions';
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import NotFound from '../../components/NotFound'; // ruta publica
import AdminRoute from './AdminRoute';

import LoadingSpinner from '../../components/UI/LoadingSpinner'; // loading :v

const Router = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();

  useEffect(() => {
    const token = query.get('token');
    if (token) {
      //Estamos usando la extensión "Allow Cors" de crome para poder hacer el pedido. Si no, bumeran responde que no tenemos permisos.
      axios({
        method: 'get',
        url: `https://www.bumeran.com.ar/candidatos/curriculum/nameAndSkills?token_auto=${token}`,
      })
        .then((res) => {
          if (res) {
            console.log(res.data.skills);
            //consulta al back si existe usuario en el back buscando por nombre
            axios
              .get(`http://localhost:3001/api/user/${res.data.nombre}`)
              .then((user) => {
                dispatch(logExternalUser(user.data[0]));
                //guardas skills
                //dispatch(skills)
              });
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      {user?.id ? (
        user.admin ? (
          <AdminRoute />
        ) : (
          <PrivateRoute />
        )
      ) : (
        <AuthRoute />
      )}

      <Route path="/404" render={() => <NotFound />} />
    </div>
  );
};

export default Router;
