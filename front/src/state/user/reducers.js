import { login, registerUser, results, clear, setAuth , logout} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = { user: {}, isAuth: false, results: 0 }; //este es el estado Inicial

const userReducer = createReducer(initialState, {
  [login.fulfilled]: (state, action) => {
    state.isAuth = true;
    state.user = action.payload;
  },
  [registerUser.fulfilled]: (state, action) => action.payload,
  [results.fulfilled]: (state, action) => {
    state.results = action.payload.result;
  },
  [clear]: (state, action) => {
    state.results = {};
  },
  [setAuth] : (state,action) => {
    state.isAuth = true
  },
  [logout] : (state,action) => {
    state.isAuth = false
  }
 });

export default userReducer;
