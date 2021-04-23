import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const allSkills = createAsyncThunk('GET_ALL_SKILLS', (i) => {
  return axios({
    method: 'get',
    url: `http://localhost:3001/api/skill/${i}`,
  })
    .then((skills) => skills.data)
    .catch((err) => console.log(err));
});

export const singleSkill = createAsyncThunk('GET_SINGLE_SKILL', (skillId) => {
  return axios
    .get(`http://localhost:3001/api/skill/${skillId}`)
    .then((skill) => skill.data)
    .catch((err) => console.log(err));
});

// export const addTest = createAction('CHANGE_HAS_TEST_BOOLEAN')

export const allSKillsSearch = createAsyncThunk('ALL_SKILLS_SEARCH', () => {
  return axios
    .get(`http://localhost:3001/api/skill/all`)
    .then((skills) => skills.data)
    .catch((err) => console.log(err));
});
