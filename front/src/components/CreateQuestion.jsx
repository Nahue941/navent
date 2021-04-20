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
  const [newAnswer, setNewAnswer] = useState([]);
  const [newRadio, setNewRadio] = useState(0);

 
  let answers = useSelector((state) => state.test.all.length);//numero de respuestas
  console.log(newAnswer, "3333333333o");
  useEffect(() => {
    dispatch(getEditTest(testId));
  }, [dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuestion({testId, newQuestion }))
    .then(()=> history.goBack());

  }


  const handleInputChangeQuestion = (e) => {
    setNewQuestion( e.target.value )
    console.log(newQuestion,"soy new question como string");
  }

  const handleInputChangeAnswer = (e) => {
    
    const auxArray = newAnswer;
    auxArray[e.target.id]={answer:e.target.value, correct: false}
    setNewAnswer (auxArray)
    
    
    // e.target.name=='true'? setNewRadio(true) : setNewRadio(false)
    // setNewRadio({ ...newRadio, [e.target.name]: e.target.value
    // })
    // console.log(newRadio, "checkbox true");
  }
  

  const handleChangeRadio = (e) => {
    console.log(e.target.value,"soy value")
  console.log(e.target.id,"soy id radio")
  setNewRadio(e.target.id)
  }

  const handleAddAnswer = () => {
    answers=answers+1
  }

  const saveAnswer = (e) => {
    const auxArray = newAnswer
    if(auxArray[newRadio].correct !== "true") auxArray[newRadio].correct = false
    if(auxArray[newRadio].correct == "true") auxArray[newRadio].correct = false
    // auxArray[newRadio].correct = true
    console.log(auxArray, "save answer")
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
          onChange={handleInputChangeQuestion} />
      </form>
      <form onSubmit={handleSubmit}>
      <h3>Ingrese las respuestas:</h3>
      
      <div>
      {
        [...Array(answers)].map((e, i) =>
        <div key={i+1} >
        <input
        type="text"
        name={`answer${i+1}"`}
        id={i}
        autoFocus
        onChange={handleInputChangeAnswer}
        />
        <input onChange={handleChangeRadio} key={i+1} type="radio" id={i} name="correct" value="true"></input>
        </div>
        )
        
      }
      </div>
      </form>
      <Button type="submit" color="blue" value="Agregar Pregunta" onClick={handleAddAnswer}/>
      <Button type="submit" color="blue" value="Guardar" onClick={saveAnswer}/>
    </div>
  )
}

export default CreateQuestion;
