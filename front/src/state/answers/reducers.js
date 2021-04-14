import { createReducer } from '@reduxjs/toolkit';
import { addAnswer, resetAnswers, wrongAnswered , correctAnswers, clear} from './actions';

const initialState = {
  selectedAnswers: [],
  wronglyAnsQuestions: [],
  correctlyAnswered: [],
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
    state.correctlyAnswered = []
  },
  [wrongAnswered]: (state, action) => {
    const wrongQ = [...state.wronglyAnsQuestions, action.payload];
    console.log("wrong", wrongQ)
    state.wronglyAnsQuestions = wrongQ;
  },
  [correctAnswers]: (state, action) => {
    const correct = [...state.correctlyAnswered,action.payload]
    state.correctlyAnswered = correct
  },
  [clear]: (state, action) => {
    state.selectedAnswers = [];
  },
});

export default answersReducer;
