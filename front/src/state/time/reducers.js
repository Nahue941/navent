import { timeLogger } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = { countDown: 0 };
const timeReducer = createReducer(initialState, {
  [timeLogger]: (state, action) => {
    state.countDown = action.payload;
  },
});

export default timeReducer;
