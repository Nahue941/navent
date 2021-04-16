import { createReducer } from '@reduxjs/toolkit';

import {allTests, singleTest, getEditTest, setEditTest ,addAdminAnswer} from "./actions";

const initialState = {
    all:[],
    singleTest: {},
    editTest: {},
};

const testReducer = createReducer(initialState, {
    [allTests.fulfilled] : (state, action) => {
        const payload = action.payload
        state.all = payload
    },
    [singleTest.fulfilled] : (state, action) => {
        const payload = action.payload
        state.singleTest = payload
    },
    [getEditTest.fulfilled] : (state, action) => {
        const payload = action.payload
        state.editTest = payload
    },
    [setEditTest.fulfilled] : (state, action) => {
        const payload = action.payload
        state.editTest = payload
    },
    [addAdminAnswer.fulfilled] : (state,action) => {
        editTest.question.answer = [...editTest.question.answer,action.payload]
    }
});

export default testReducer