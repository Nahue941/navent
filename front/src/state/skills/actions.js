import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const allSkills = createAsyncThunk('GET_ALL_SKILLS', () => {
    return axios
    .get(`http://localhost:3001/api/skill`)
    .then((skills) => skills.data)
    .catch(err => console.log(err))
});

export const singleSkill = createAsyncThunk('GET_SINGLE_SKILL', (skillId) => {
    return axios
    .get(`http://localhost:3001/api/skill/${skillId}`)
    .then((skill) => skill.data)
    .catch(err => console.log(err))
});