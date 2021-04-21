import { login, registerUser, results, clear , logOut, allResults, getUser, logExternalUser} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = { user: {}, results: {}, allResults: [] }; //este es el estado Inicial

const userReducer = createReducer(initialState, {
  [getUser.fulfilled]: (state, action) => {
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
  [logExternalUser] : (state, action) => {
    state.user = action.payload
  },
  [logOut] : (state,action) => initialState,
 });

export default userReducer;
