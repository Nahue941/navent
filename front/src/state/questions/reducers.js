import {createReducer } from '@reduxjs/toolkit';

import {allQuestions, allTests} from "./actions"

const initialState = {
    all:[],
    single:{}, 
    tests:[]
}
const questionReducer = createReducer(initialState, {
    [allQuestions.fulfilled] : (state,action) => {
        const payload = action.payload
        state.all = payload 
    }, 
    [allTests.fulfilled] : (state, action) => {
        const payload = action.payload
        state.tests = payload 
    }

})
 
export default questionReducer;


