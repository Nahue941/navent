import { createReducer } from '@reduxjs/toolkit';

import {allTests, singleTest} from "./actions"

const initialState = {
    all:[],
    singleTest: {}
}
const testReducer = createReducer(initialState, {
    [allTests.fulfilled] : (state, action) => {
        const payload = action.payload
        state.all = payload
    },
    [singleTest.fulfilled] : (state, action) => {
        const payload = action.payload
        state.singleTest = payload
    }
})

export default testReducer