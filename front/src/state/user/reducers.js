import { login, registerUser, results, clear , logOut, allResults} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = { user: {}, results: {}, allResults: [] }; //este es el estado Inicial

const userReducer = createReducer(initialState, {
  [login.fulfilled]: (state, action) => {
    state.user = action.payload;
  },
  [registerUser.fulfilled]: (state, action) => {
    state.user = action.payload;
  },
  [results.fulfilled]: (state, action) => {
    state.results = action.payload;
  },
  [allResults.fulfilled]: (state, action) => {
    state.allResults = action.payload;
  },
  [clear]: (state, action) => {
    state.results = {};
  },
  [logOut] : (state,action) => initialState,
 });

export default userReducer;
