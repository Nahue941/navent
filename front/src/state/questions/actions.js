import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// me trae todas las preguntas para el user de un test
export const allQuestions = createAsyncThunk("GET_QUESTIONS", (id)=>{
    return axios.get(`http://localhost:3001/api/test/${id}`).then((test) => test.data.questions ).catch((err) => console.log(err))
})

