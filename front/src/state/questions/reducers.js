import {createReducer } from '@reduxjs/toolkit';

import {allQuestions} from "./actions"

const initialState = {
    all:[],
    single:{}
}
const questionReducer = createReducer(initialState, {
    [allQuestions.fulfilled] : (state,action) => {
        const payload = action.payload
        state.all = payload 
    }
})
 
export default questionReducer;

