import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createQuestion } from '../state/questions/actions'
import Button from './UI/Button';
//import styles from '../styles/radioButton.module.css'

const CreateQuestion = ({ testId }) => {

  const history = useHistory();
  const dispatch = useDispatch();
  /*  useEffect(() => {
     dispatch(getEditTest(testId))
   },[dispatch]) */ //Es posible que no sea nesario porque tecnicamente ya esta cargado el test en el redux

  const [newQuestion, setNewQuestion] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuestion({testId, newQuestion }))
    //history.goBack();
    console.log(`auch`);
  }

  const handleInputChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value })
    console.log(newQuestion);
    console.log(testId);
  }

/*   const handleRadioChange = (e) => {
    setNewQuestion({...newQuestion, [e.target.name]: e.target.value === "true"})
    console.log(newQuestion)
  }
 */


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
          
{/*         <div className={styles.body}>
          <label className={styles.radioBtn}>
            <input
              required
              type="radio"
              name="correct"
              value="true"
              onChange={handleRadioChange}
            />
            <span className={styles.checkmark}>
            </span>
            <p>Correcta</p>
          </label>
        </div>
        <div className={styles.body}>
          <label className={styles.radioBtn}>
            <input
              required
              type="radio"
              name="correct"
              value="false"
              onChange={handleRadioChange}
            />
            <span className={styles.checkmark}>
            </span>
            <p>Incorrecta</p>
          </label>
        </div> */}
      </form>
      <Button type="submit" color="blue" value="Enviar" onClick={handleSubmit}/>
    </div>
  )
}

export default CreateQuestion;