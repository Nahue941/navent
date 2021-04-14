/*
import React from 'react';
import { useForm } from 'react-hook-form';
const Forms = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch('example')); // watch input value by passing the name of it
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="user"
        ref={register({
          required: { value: true, message: 'Ingrese un nombre de usuario' },
        })}
      />
      <input
        name="mail"
        ref={register({
          required: { value: true, message: 'Ingrese un mail' },
        })}
      />
      <input
        type="password"
        name="password"
        ref={register({
          required: { value: true, message: 'Ingrese una contraseña' },
        })}
      />
      <span>{errors?.user?.message}</span>
      <span>{errors?.mail?.message}</span>
      <span>{errors?.password?.message}</span>
      <button>Register</button>
    </form>
  );
};
export default Forms;
*/