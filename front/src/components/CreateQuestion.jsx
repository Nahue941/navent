import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createQuestion } from '../state/questions/actions'
import Button from './UI/Button';


const CreateQuestion = ({ testId }) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [newQuestion, setNewQuestion] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuestion({testId, newQuestion }))
    .then(()=> history.goBack());

  }

  const handleInputChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <h3>Ingrese la pregunta o consigna:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          id="question"
          autoFocus
          onChange={handleInputChange} />
      </form>
      <Button type="submit" color="blue" value="Enviar" onClick={handleSubmit}/>
    </div>
  )
}

export default CreateQuestion;