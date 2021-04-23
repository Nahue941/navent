import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { allSkills, singleSkill, allSKillsSearch, resetSingleSkill } from './actions';

const initialState = {
  allSkills: [], //agregado para panel admin
  singleSkill: {},
  allSKillsSearch: [],
};

const skillsReducer = createReducer(initialState, {
  [allSkills.fulfilled]: (state, action) => {
    const payload = action.payload;
    state.allSkills = payload;
  },
  [singleSkill.fulfilled]: (state, action) => {
    const payload = action.payload;
    state.singleSkill = payload;
  }, //agregado para panel admin,
  [allSKillsSearch.fulfilled]: (state, action) => {
    const payload = action.payload;
    state.allSKillsSearch = payload;
  },
  [resetSingleSkill]: (state, action) => {
    state.singleSkill = {}
  }
});

export default skillsReducer;

//crear un reducer para los skills, que haga un get al back a /api/skills, me da la lista de todas las habilidades,

//tengo un skill y ese skill puede o no tener un test, el skill me viene con el id, o el test me viene con el id, los skills van a relacionarse con los test, me llega un array con las habilidades, pueden tener o no un test, yo muestro todos los skills, los skills tienen test o no, un booleano, un array, con true o false, que se llama

// cuando me logue con admin que me lleve a admin/skills

//renderizar un nuevo componente que sea edit test, edit test trae todas las preguntas y todas las respuestas de un determinado test, cuando yo este en edit test no necesito single
