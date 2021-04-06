import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../state/user/actions';
import styles from '../styles/form.module.css';
const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data, '<-----Este es el body');
    //dispatch(login(data));
  };
  return (
    <header>
      <div style={styles.header}>
        <h2 style={styles.h2}>Ingresa tus datos</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={styles.input}
            placeholder="Mail"
            name="mail"
            ref={register({
              required: { value: true, message: 'Ingrese un mail' },
            })}
          />
          <hr style={styles.hr} />
          <input
            style={styles.input}
            placeholder="Password"
            type="password"
            name="password"
            ref={register({
              required: { value: true, message: 'Ingrese una contraseña' },
            })}
          />
          <span>{errors?.mail?.message}</span>
          <span>{errors?.password?.message}</span>
          <hr style={styles.hr} />
          <button style={styles.button}>Login</button>
        </form>
      </div>
    </header>
  );
};

export default Login;
