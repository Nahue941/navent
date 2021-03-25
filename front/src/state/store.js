import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {

        // Aca van los reducers 
        
    },
  });
  
  export default store;
  