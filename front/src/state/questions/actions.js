import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {actualQuestion} from '../test/actions'

import { getEditTest } from '../test/actions';

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
  let { testId, newQuestion } = body;
  return axios({
    method: 'post',
    data: {question: newQuestion},
    url: `http://localhost:3001/api/question/${testId}`,
  });
});

export const deleteQuestion = createAsyncThunk(
  'DELETE_QUESTION',
  ({ questionId, skillId }, thunkAPI) => {
    return axios
      .delete(`http://localhost:3001/api/question/${questionId}`)
      .then(() => thunkAPI.dispatch(getEditTest(skillId)))
      .catch((err) => console.log(err));
  },
);

export const editQuestion = createAsyncThunk(
  'EDIT_QUESTION',
  ({ editQuestion, skillId, index, questionId }, thunkAPI) => {
      axios
      .put(`http://localhost:3001/api/question/${questionId}`,editQuestion)
      .then((data) => {
        return data;
      })
      .then(() => thunkAPI.dispatch(getEditTest(skillId)))
      .catch((err) => console.log(err));
  },
);

export const enableAnswer = createAsyncThunk('ENEABLE_ANSWER', (questionId) => {
  return axios({
    method: 'put',
    url: `http://localhost:3001/api/question/activate/${questionId}`
  })
})


export const setDisabled = createAction('SET_DISABLED');

export const setIndexQuestion = createAction('SET_INDEX_QUESTION');

export const resetQuestions = createAction('RESET_QUESTIONS');
