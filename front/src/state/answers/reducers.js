import { createReducer } from '@reduxjs/toolkit';
import { addAnswer, resetAnswers } from './actions'

const initialState = {
    selectedAnswers: []
}

const answersReducer = createReducer(initialState, {
    [addAnswer]:  (state, action) => {
        const { index, answer } = action.payload;
        const auxArray = state.selectedAnswers;
        auxArray[index] = answer;
        state.selectedAnswers = auxArray;
    },
    [resetAnswers]: (state, action) => {
        state.selectedAnswers = []
    }
})

export default answersReducer