import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('LOGIN', (user) => {
  console.log(user, '<------------ esta es la mail');
  return axios
    .post(`http://localhost:3001/api/login/`, user)
    .then((test) => {
      console.log(test);

      return test.data;
    })
    .catch((err) => console.log('hola'));
});
