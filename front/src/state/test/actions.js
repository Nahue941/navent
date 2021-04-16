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
//traer el test que quiero actualizar
export const getEditTest = createAsyncThunk('GET_EDIT_TEST', (skillId) => {
    return axios
    .get(`http://localhost:3001/api/test/edit/${skillId}`)
    .then((test) => test.data)
    .catch(err => console.log(err))
});
//post para actualizar el test
export const setEditTest = createAsyncThunk('SET_EDIT_TEST', (testId) => {
    return axios
    .put(`http://localhost:3001/api/test/${testId}`)
    .then((test) => test.data)
    .catch(err => console.log(err))
});

export const addAdminAnswer = createAsyncThunk(
    'ADD_ADMIN_ANSWER',
    ({ testId, answer }) => {
      axios
        .post(`http://localhost:3001/api/answer/:${testId}`, answer)
        .then((answer) => answer.data)
        .catch((err) => console.log(err));
    },
  );
  