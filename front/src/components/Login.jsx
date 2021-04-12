import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../state/user/actions';
import styles from '../styles/form.module.css';
import Button from '../components/UI/Button'
const Login = () => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const logged = useSelector((state) => state.user.isAuth);

  const onSubmit = (data) => {
    //dispatch(login(data));
  };
  
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Ingresa tus datos</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="Mail"
          name="mail"
          ref={register({
            required: { value: true, message: 'Ingrese un mail' },
          })}
        />
        <hr className={styles.hr} />
        <input
          className={styles.input}
          placeholder="Password"
          type="password"
          name="password"
          ref={register({
            required: { value: true, message: ' Ingrese una contraseña' },
          })}
        />
        <span>{errors?.mail?.message}</span>
        <span>{errors?.password?.message}</span>
        <hr className={styles.hr} />
        <Button
              value="Login"
              type="submit"
              color="#eb0064"
              marginLeft="25%"
              marginTop="10%"
            />
      </form>
    </div>
  );
};

export default Login;
