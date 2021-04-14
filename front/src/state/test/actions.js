import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const allTests = createAsyncThunk('GET_TESTS', (userId) => {
    return axios
    .get(`http://localhost:3001/api/test/all/${userId}`)
    .then((tests) => tests.data)
    .catch((err) => console.log(err));
});
  
export const singleTest = createAsyncThunk('GET_SINGLE_TEST', (testId) => {
    return axios
    .get(`http://localhost:3001/api/test/${testId}/${userId}`)
    .then((test) => test.data)
    .catch(err => console.log(err))
});

