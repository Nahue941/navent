import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

// me trae todas las preguntas para el user de un test
export const allQuestions = createAsyncThunk('GET_QUESTIONS', (id) => {
    return axios
    .get(`http://localhost:3001/api/test/${id}`)
    .then((test) => test.data)
    .catch((err) => console.log(err));
});

export const allTests = createAsyncThunk('GET_TESTS', (userId) => {
  return axios
    .get(`http://localhost:3001/api/test/all/${userId}`)
    .then((tests) => tests.data)
    .catch((err) => console.log(err));
});

export const createQuestion = createAsyncThunk('CREATE_QUESTION', (body) => {
  let {testId, newQuestion} = body;
  return axios({
    method: 'post',
    data: newQuestion,
    url: `http://localhost:3001/api/question/${testId}`
  })
})

export const setDisabled = createAction('SET_DISABLED');

export const setIndexQuestion = createAction('SET_INDEX_QUESTION')

export const resetQuestions = createAction('RESET_QUESTIONS')

