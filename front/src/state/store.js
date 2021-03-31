import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import question from './questions/reducers';
import answer from './answers/reducers';
import user from './user/reducers';
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    question,
    answer,
    user,
    // Aca van los reducers
  },
});

export default store;
