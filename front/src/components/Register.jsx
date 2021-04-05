import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../state/user/actions';

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data, '<-----Este es el body');
    dispatch(registerUser(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="name"
        name="name"
        ref={register({
          required: { value: true, message: 'Ingrese un nombre de usuario' },
        })}
      />
      <input
        placeholder="mail"
        name="mail"
        ref={register({
          required: { value: true, message: 'Ingrese un mail' },
        })}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        ref={register({
          required: { value: true, message: 'Ingrese una contraseña' },
        })}
      />
      <span>{errors?.name?.message}</span>
      <span>{errors?.mail?.message}</span>
      <span>{errors?.password?.message}</span>
      <button>Register</button>
    </form>
  );
};

export default Register;
