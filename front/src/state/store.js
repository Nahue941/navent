import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import question from './questions/reducers';
import answer from './answers/reducers';
import user from './user/reducers';
import time from './time/reducers'
import test from './test/reducers';
import skill from './skills/reducers';

const reducers = combineReducers({
  question,
  answer,
  user,
  test, 
  time,
  skill
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
