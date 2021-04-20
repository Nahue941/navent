import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('LOGIN', async (user) => {
  try {
    const logged = await axios.post(`http://localhost:3001/api/login`, user);
    localStorage.setItem("token", logged.data);
  } catch (err) {
    return console.log(err);
  }
});

export const getUser = createAsyncThunk("GET_USER_BY_TOKEN", async () => {
  try {
    const user = await axios.get(`http://localhost:3001/api/me`, {
      headers: { Authorization: `token ${localStorage.getItem("token")}` },
    })
    return user.data;
  } catch (error) {
    console.log(error);
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

export const results = createAsyncThunk('RESULTS_TEST', async (body) => {
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

export const logOut = createAction("LOG_OUT")
