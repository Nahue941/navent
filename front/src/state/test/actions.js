import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const allTests = createAsyncThunk('GET_TESTS', (data) => {
    const {userId, external, skills} = data
    return axios
    .get(`http://localhost:3001/api/test/all/${userId}`)
    .then((tests) => {
        if(external){
            const userTest = tests.data.filter(test => skills.includes(test.skillId))
            return userTest
        }
        return tests.data
        //hacer una pre-organizacion de los test a mostrar si no se trata de un usuario local
        
    })
    .catch((err) => console.log(err));
});

export const singleTest = createAsyncThunk('GET_SINGLE_TEST', (testId) => {
  return axios
    .get(`http://localhost:3001/api/test/data/${testId}`)
    .then((test) => test.data)
    .catch((err) => console.log(err));
});

//traer el test que quiero actualizar
export const getEditTest = createAsyncThunk(
  'GET_EDIT_TEST',
  (skillId, thunkAPI) => {
    console.log(`holis`)
    return axios
      .get(`http://localhost:3001/api/test/edit/${skillId}`)
      .then((test) => test.data)
      .catch((err) => console.log(err));
  },
);

//post para actualizar el test
export const setEditTest = createAsyncThunk('SET_EDIT_TEST', (test) => {
  const { daysToReMade, qtyQuestions, qtyAnswers, description } = test;
  const testId = test.id;
  return axios({
    method: 'put',
    data: {
      daysToReMade,
      qtyQuestions,
      qtyAnswers,
      description,
    },
    url: `http://localhost:3001/api/test/${testId}`,
  })
    .then((test) => test.data)
    .catch((err) => console.log(err));
});

export const createTest = createAsyncThunk('CREATE_NEW_TEST', (newTest) => {
  return axios
    .post('http://localhost:3001/api/test/', newTest)
    .then((test) => test.data)
    .catch((err) => console.log(err));
});

export const actualQuestion = createAction('ACTUAL_QUESTION');

export const addAdminAnswer = createAsyncThunk(
  'ADD_ADMIN_ANSWER',
  ({ testId, newAnswer, skillId, questionIndex }, thunkAPI) => {
    axios
      .post(`http://localhost:3001/api/answer/${testId}`, newAnswer)
      .then((answer) => {
        return answer.data;
      })
      .then(() => thunkAPI.dispatch(getEditTest(skillId)))
      .then(() => thunkAPI.dispatch(actualQuestion(questionIndex)))
      .catch((err) => console.log(err));
  },
);

export const editQuestion = createAsyncThunk(
  'EDIT_QUESTION',
  (questionID, newQuestion) => {
    axios
      .put(`http://localhost:3001/api/question/${questionID}`, newQuestion)
      .then((answer) => {
        answer.data;
      })
      .catch((err) => console.log(err));
  },
);

export const toggleActiveTest = createAsyncThunk(
  'TOGGLE_ACTIVE',
  ({ testId, active }) => {
    return axios
      .put(`http://localhost:3001/api/test/${testId}`, { active: !active })
      .then((data) => data)
      .catch((err) => console.log(err));
  },
);

export const actualIndexQuestion = createAction('ACTUAL_INDEX');

export const modifyAnswerState = createAsyncThunk(
  'MODIFY_ANSWER_STATE',
  ({ answerId, skillId,index, questionId }, thunkAPI) => {
    axios
      .put(`http://localhost:3001/api/answer/${answerId}/updateCorrect`, {questionId})
      .then((data) =>{ 
          return data
      })
      .then(() => thunkAPI.dispatch(getEditTest(skillId)))
      .then(() => thunkAPI.dispatch(actualQuestion(index)))
      .catch((err) => console.log(err));
  },
);

export const updateAnswerState = createAction('UPDATE_ANSWER_STATE');
