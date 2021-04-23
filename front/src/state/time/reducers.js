import { createReducer } from '@reduxjs/toolkit';
import {
  timeLogger,
  timeReset,
  totalTime,
  totalTimeReset,
} from './actions';

const initialState = { countDown: Number, total: 0 };
const timeReducer = createReducer(initialState, {
  [timeLogger]: (state, action) => {
    state.countDown = action.payload;
  },
  [timeReset]: (state, action) => {
    state.countDown = action.payload;
  },
  [totalTime]: (state, action) => {
    state.total = action.payload;
  },
  [totalTimeReset]: (state) => {
    state.total = 0;
  }
});

export default timeReducer;
