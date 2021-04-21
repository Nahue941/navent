import { createReducer } from '@reduxjs/toolkit';

import { allQuestions, allTests, setDisabled, setIndexQuestion, resetQuestions , deleteQuestion} from "./actions"

const initialState = {
    all: [],
    indexQuestion: 0,
    tests: [],
    disabled: true,
    
}
const questionReducer = createReducer(initialState, {
    [allQuestions.fulfilled]: (state, action) => {
        const payload = action.payload
        state.all = payload
    },
    [allTests.fulfilled]: (state, action) => {
        const payload = action.payload
        state.tests = payload
    },
    [setDisabled]: (state, action) => {
        state.disabled = action.payload
    },
    [setIndexQuestion]: (state, action) => {
        state.indexQuestion = action.payload
    },
    [resetQuestions]: (state, action) => {
        state.all = []
    },
    

})

export default questionReducer;


