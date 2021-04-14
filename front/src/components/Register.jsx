import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../state/user/actions';
import styles from '../styles/form.module.css';
import Button from '../components/UI/Button'
const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(registerUser(data))
      .then(() => history.push(`/`));

  };
  return (

    <div className={styles.container}>
      <h2 className={styles.h2}>Ingresa tus datos</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="Name"
          name="name"
          ref={register({
            required: {
              value: true,
              message: 'Ingrese un nombre de usuario',
            },
          })}
        />
        <hr className={styles.hr} />
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
            required: { value: true, message: 'Ingrese una contraseña' },
          })}
        />
        <span>{errors?.name?.message}</span>
        <span>{errors?.mail?.message}</span>
        <span>{errors?.password?.message}</span>
        <hr className={styles.hr} />
        <Button
              value="Register"
              type="submit"
              color="#eb0064"
              marginLeft="25%"
              marginTop="10%"
            />
      </form>
    </div>
  );
};

export default Register;
