import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createQuestion } from '../state/questions/actions';
import ButtonEdit from './UI/ButtonEdit';
import { getEditTest, actualIndexQuestion } from '../state/test/actions';
import { useSelector } from 'react-redux';
import styles from '../styles/createQuestion.module.scss';
import {IoMdAddCircleOutline} from 'react-icons/io';

const CreateQuestion = ({ testId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState([]);
  const [newRadio, setNewRadio] = useState(0);
  const [answersNum, setAnswersNum] = useState(
    useSelector((state) => state.test.all.length),
  ); //largo original de preguntas segun el test

  const [limit, setLimit] = useState(
    useSelector((state) => state.test.all.length),
  ); //cantidad de respuestas minima que puede tener un test
  useEffect(() => {
    dispatch(getEditTest(testId));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuestion({ testId, newQuestion })).then(() =>
      history.goBack(),
    );
  };

  const handleInputChangeQuestion = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleInputChangeAnswer = (e) => {
    const auxArray = newAnswer;
    auxArray[e.target.id] = { answer: e.target.value, correct: false };
    setNewAnswer(auxArray);
  };
  //selecciona pregunta clickeada del radio
  const handleChangeRadio = (e) => {
    setNewRadio(e.target.id);
  };

  //elimina o agrega inputs de respuestas
  const handleAddAnswers = (e) => {
    if (e.target.value === '+') setAnswersNum(answersNum + 1);
    if (e.target.value === '-' && answersNum >= limit + 1)
      setAnswersNum(answersNum - 1);
  };

  //hace false a todos, y despues hace true al seleccionado con el radio
  const saveAnswer = (e) => {
    const auxArray = newAnswer;
    auxArray.map((x) => (x.correct = false)); //primero hago false a todas
    auxArray[newRadio].correct = true; //a la seleccionada la hago true
    setNewAnswer(newAnswer); //mi data actualizada, lista para mandar al back
    console.log(newAnswer, 'save answer'); // me muestra la data
  };

  return (
    <div  className={styles.centerItems}>
      <div className={`${styles.container} ${styles.centerItems}`}> 
      <h3>Ingrese la pregunta o consigna:</h3>
      <form onSubmit={handleSubmit}>
        <input
        className={styles.form__input}
          type="text"
          name="question"
          id="question"
          autoFocus
          onChange={handleInputChangeQuestion}
        />
      </form>
      <form onSubmit={handleSubmit}>
        <h3>Ingrese las respuestas:</h3>

        <div>
          {[...Array(answersNum)].map((e, i) => (
            <div key={i + 1}>
              <input
                className={styles.form__input}
                type="text"
                name={`answer${i + 1}`}
                id={i}
                autoFocus
                onChange={handleInputChangeAnswer}
              />
              <input
                onChange={handleChangeRadio}
                key={i + 1}
                type="radio"
                id={i}
                name="correct"
                value="true"
              ></input>
            </div>
          ))}
        </div>
      </form>
      <div className={styles.btn_align} >
      <ButtonEdit
        height="30px"
        width="30px"
        type="submit"
        color="blue"
        value="+"
        onClick={handleAddAnswers}
      />
      <ButtonEdit
        height="30px"
        width="30px"
        type="submit"
        color="blue"
        value="-"
        onClick={handleAddAnswers}
      />
      </div>
      {newAnswer.length > 0 && newQuestion.length > 0 ? (
        <ButtonEdit
          height="80px"
          width="60px"
          type="submit"
          color="blue"
          value="Guardar"
          onClick={saveAnswer}
        />
      ) : (
        <ButtonEdit
          className={styles.btn}
          type="submit"
          color="#C3C2C8"
          value="Guardar"
          height="30px" width="80px"
        />
      )}
    </div>
    </div>
  );
};

export default CreateQuestion;
