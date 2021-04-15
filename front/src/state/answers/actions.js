import { createAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

export const addAnswer = createAction('ADD_ANSWER')

export const resetAnswers = createAction('RESET_ANSWER')

export const wrongAnswered = createAction('WRONG_ANSWERS')

export const correctAnswers = createAction('CORRECT_ANSWER')

export const clear = createAction('CLEAR')

export const addAdminAnswer = createAsyncThunk('ADD_ADMIN_ANSWER',({testId,answer}) => {
    axios.post()
})

