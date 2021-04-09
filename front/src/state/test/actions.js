import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const allTests = createAsyncThunk('GET_TESTS', () => {
    return axios
    .get(`http://localhost:3001/api/test/all/1`)
    .then((tests) => tests.data)
    .catch((err) => console.log(err));
  });
  
  export const singleTest = createAsyncThunk('GET_SINGLE_TEST', (testId) => {
    console.log("llegue")
    return axios
    .get(`http://localhost:3001/api/test/${testId}/1`) //`http://localhost:3001/api/test/all/${userId}`
    .then((test) => test.data)
    .catch(err => console.log(err))
})