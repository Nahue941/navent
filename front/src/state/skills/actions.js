import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const allSkills = createAsyncThunk('GET_ALL_SKILLS', () => {
    return axios
    .get(`http://localhost:3001/api/skill`)
    .then((test) => test.data)
    .catch(err => console.log(err))
});

// [
//     {
//       name: "nombre del Skill",//string
//       hasTest: false //boolean, si hay test renderizo un botón para editar test, en false no hay test, si hay test que el botón cambie a crear test
// componente ediar y crear test
//     }
//   ]