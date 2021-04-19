import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createQuestion } from '../state/questions/actions'
import Button from './UI/Button';
import { getEditTest, actualIndexQuestion } from '../state/test/actions';
import { useSelector } from 'react-redux';

const CreateQuestion = ({ testId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newQuestion, setNewQuestion] = useState("");

  const answers = useSelector((state) => state.test.all.length);//numero de respuestas

  useEffect(() => {
    dispatch(getEditTest(testId));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuestion({testId, newQuestion }))
    .then(()=> history.goBack());

  }

  const handleInputChange = (e) => {
    setNewQuestion( e.target.value )
    console.log(newQuestion);
    // setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value })
    // console.log(newQuestion);
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
      <form onSubmit={handleSubmit}>
      <h3>Ingrese las respuestas:</h3>
      <div>
      {
        [...Array(answers)].map((e, i) =>         <input
        type="text"
        name={`answer ${i+1}"`}
        id="question"
        autoFocus
        onChange={handleInputChange}
        key={i}
      />)

      }
      </div>
      </form>
      <Button type="submit" color="blue" value="Enviar" onClick={handleSubmit}/>
    </div>
  )
}

export default CreateQuestion;