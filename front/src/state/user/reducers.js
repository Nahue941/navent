import { login, registerUser, results, clear , logOut} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = { user: {}, isAuth: false, results: {} }; //este es el estado Inicial

const userReducer = createReducer(initialState, {
  [login.fulfilled]: (state, action) => {
    state.isAuth = true;
    state.user = action.payload;
  },
  [registerUser.fulfilled]: (state, action) => {
    state.isAuth = true;
    state.user = action.payload;
  },
  [results.fulfilled]: (state, action) => {
    state.results = action.payload;
  },
  [clear]: (state, action) => {
    state.results = {};
  },
  [logOut] : (state,action) => initialState,
 });

export default userReducer;
