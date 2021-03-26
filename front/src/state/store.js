import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import question from "./questions/reducers"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        question
        // Aca van los reducers 
        
    },
  });
  
export default store;

