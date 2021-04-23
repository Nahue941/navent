import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getEditTest } from '../test/actions';
import axios from 'axios';
import {actualQuestion} from '../test/actions'

export const addAnswer = createAction('ADD_ANSWER');

export const resetAnswers = createAction('RESET_ANSWER');

export const wrongAnswered = createAction('WRONG_ANSWERS');

export const correctAnswers = createAction('CORRECT_ANSWER');

export const clear = createAction('CLEAR');

export const editAnswer = createAsyncThunk(
  'EDIT_ANSWER',
  async ({ answers, skillId, questionIndex }, thunkAPI) => {
    const promises = answers.map(
      ({ answerId, correct, answer, questionId }) => {
        return axios.put(`http://localhost:3001/api/answer/${answerId}`, {
          answer,
          questionId,
          // correct,
        });
      },
    );
    try {
      const res = await Promise.all(promises);
      thunkAPI.dispatch(getEditTest(skillId));
      thunkAPI.dispatch(actualQuestion(questionIndex));
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  },
);

export const deleteAnswer = createAsyncThunk(
  'DELETE_ANSWER',
  ({ answerId, skillId, questionIndex }, thunkAPI) => {
    axios
      .put(`http://localhost:3001/api/answer/${answerId}`,{active:false})
      .then(() => thunkAPI.dispatch(getEditTest(skillId)))
      .then(() => thunkAPI.dispatch(actualQuestion(questionIndex)))
      .catch((err) => console.log(err));
  },
);
  
export const createAnswerBulk = createAsyncThunk('CREATE_ANSWER', (arrayAnswers) => {
    console.log(`en el dispatch`)
    console.log(arrayAnswers)
    return axios({
      method: 'post',
      data: arrayAnswers,
      url: `http://localhost:3001/api/answer/bulk`,
    });

  }
);