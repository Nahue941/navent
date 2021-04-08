import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('LOGIN', async (user) => {
  try {
    const logged = await axios.post(`http://localhost:3001/api/login/`, user);
    return logged.data;
  } catch (err) {
    return console.log(err);
  }
});

export const registerUser = createAsyncThunk('REGISTER_USER', async (body) => {
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

export const results = createAsyncThunk(
  'RESULTS_TEST',
  async (body) => {
    try {
      const testResults = await axios.post('http://localhost:3001/api/result', 
       body
      );
      return testResults.data;
    } catch (error) {
      return console.error(error);
    }
  },
);

export const clear = createAction("RESET")

