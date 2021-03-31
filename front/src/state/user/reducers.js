import { login } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = { user: {}, isAuth: false }; //este es el estado Inicial

const userReducer = createReducer(initialState, {
  [login.fulfilled]: (state, action) => {
    state.isAuth = true;
    state.user = action.payload;
  },
});

export default userReducer;
