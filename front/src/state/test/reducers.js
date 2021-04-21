import { createReducer } from '@reduxjs/toolkit';

import {
  allTests,
  singleTest,
  getEditTest,
  setEditTest,
  addAdminAnswer,
  actualIndexQuestion,
  actualQuestion,
  modifyAnswerState,
  updateAnswerState,
  editQuestion,
  toggleActiveTest
} from './actions';

const initialState = {
  all: [],
  singleTest: {},
  editTest: {},
  indexQuestion: 0,
  actualQuestion:{}
};

const testReducer = createReducer(initialState, {
  [allTests.fulfilled]: (state, action) => {
    const payload = action.payload;
    state.all = payload;
  },
  [singleTest.fulfilled]: (state, action) => {
    const payload = action.payload;
    state.singleTest = payload;
  },
  [getEditTest.fulfilled]: (state, action) => {
    const payload = action.payload;
    state.editTest = payload;
  },
  [setEditTest.fulfilled]: (state, action) => {
    const payload = action.payload;
    state.editTest = payload;
  },
  [addAdminAnswer.fulfilled]: (state, action) => {
    state.editTest.questions[state.indexQuestion].answers = [
      ...state.editTest.questions[state.indexQuestion].answers,
      action.payload,
    ];
  },
  [actualIndexQuestion]: (state, action) => {
    state.indexQuestion = action.payload;
  },
  [actualQuestion] : (state,action) => {
    state.actualQuestion = state.editTest.questions[action.payload]
  },
  [modifyAnswerState]:(state,action) => {

    const correct = !action.payload.state
    const index = action.payload.index
    const oldIndex = action.payload.oldIndex

    state.actualQuestion.answers[oldIndex].correct =  false
    state.actualQuestion.answers[index].correct =  correct
  },
  [updateAnswerState] : (state,action) => {
    const questionIndex = action.payload
    state.editTest.questions[questionIndex] = state.actualQuestion
  },
  [toggleActiveTest.fulfilled] : (state, action) => {
    state.editTest.active = !state.editTest.active
  }
  
});

export default testReducer;
