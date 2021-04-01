import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('LOGIN', async (user) => {
  try {
    const logged = await axios.post(`http://localhost:3001/api/login/`, user);
    console.log(logged);
    return logged.data;
  } catch (err) {
    return console.log(err);
  }
});

export const registerUser = createAsyncThunk('REGISTER_USER', async (body) => {
  console.log(body);
  try {
    const userCreated = await axios.post(
      'http://localhost:3001/api/register',
      body,
    );
    return userCreated.data;
  } catch (error) {
    return console.error(error);
  }
});
