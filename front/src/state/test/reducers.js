import { createReducer } from '@reduxjs/toolkit';

import {
  allTests,
  singleTest,
  getEditTest,
  setEditTest,
  addAdminAnswer,
  actualIndexQuestion,
} from './actions';

const initialState = {
  all: [],
  singleTest: {},
  editTest: {},
  indexQuestion: 0,
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
});

export default testReducer;
