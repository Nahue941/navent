import { createReducer } from '@reduxjs/toolkit';
import { addAnswer, resetAnswers, wrongAnswered , clear} from './actions';

const initialState = {
  selectedAnswers: [],
  wronglyAnsQuestions: [],
};

const answersReducer = createReducer(initialState, {
  [addAnswer]: (state, action) => {
    const { index, answer } = action.payload;
    const auxArray = state.selectedAnswers;
    auxArray[index] = answer;
    state.selectedAnswers = auxArray;
  },
  [resetAnswers]: (state, action) => {
    state.selectedAnswers = [];
    state.wronglyAnsQuestions = [];
  },
  [wrongAnswered]: (state, action) => {
    const wrongQ = [...state.wronglyAnsQuestions, action.payload];
    state.wronglyAnsQuestions = wrongQ;
  },
  [clear]: (state, action) => {
    state.selectedAnswers = [];
  },
});

export default answersReducer;
