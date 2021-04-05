import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../state/user/actions';

const Login = () => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const logged = useSelector((state) => state.user.isAuth);

  const handleChange = (e) => {
    if (e.target.name === 'mail') setMail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  };

  const onSubmit = () => {
    dispatch(login({ mail, password }));
  };
  return (
    <div>
      {!logged ? (
        <div>
          <input
            name="mail"
            placeholder="E-mail"
            onChange={handleChange}
          ></input>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          ></input>
          <button onClick={onSubmit}>Login</button>
        </div>
      ) : (
        <div>
          <h1>{`Bienvenido ${mail}`}</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
