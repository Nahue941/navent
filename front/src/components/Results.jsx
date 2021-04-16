import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Spinner from './UI/Spinner';

import { format } from '../utils/format';
import styles from '../styles/results.module.scss';
import * as IconName from 'react-icons/fc';
import * as HappyIcon from "react-icons/bi";


const Results = () => {
  const {
    state: { testId },
  } = useLocation();

  const numQuestions = useSelector((state) => state.question.all).length;

  const results = useSelector((state) => state.user.results);
  const wrongAnswers = useSelector((state) => state.answer.wronglyAnsQuestions);
  const correctAnswers = useSelector((state) => state.answer.correctlyAnswered);
  const singleTests = useSelector((state) => state.test.singleTest);


  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <h1 className={styles.h1}>Calificación</h1>
        <Spinner percentage={results.result} />
      </div>
      <div className={styles.container2}> 
        <h2 className={`${styles.h2} ${styles.left}`}>¡Felicidades! ¡Completaste el Test! <br/><HappyIcon.BiHappyBeaming /></h2>
        {wrongAnswers.length ? (
          <>
          <h2 className={`${styles.h2} ${styles.left}`}>
          Preguntas correctas:
          </h2>
          <div className={styles.incorrect}>
          {correctAnswers.map((question) => {
            return (
              <div key={question.id}>
                <h4>{question.question}  <IconName.FcOk /> </h4>
              </div>
            );
          })}
          </div>
        <h2 className={`${styles.h2} ${styles.left}`}>
          Preguntas incorrectas: 
        </h2>
        <div className={styles.incorrect}>
          {wrongAnswers.map((question) => {
            return (
              <div key={question.id}>
                <h4>{question.question}  <IconName.FcCancel /> </h4>
              </div>
            );
          })}{' '}
        </div>
        </>
        ) : (
          <h2 className={`${styles.h2} ${styles.left}`}>Todas las respuestas fueron acertadas</h2>
        )}
        <br/>
        <h3 className={styles.h3}><IconName.FcClock/>{`Tu tiempo fue de: ${format(results.time)}`}<br/>{`Puedes volver a intentarlo en ${
          singleTests.daysToReMade
        } días`}</h3>
      </div>
    </div>
  );
};

export default Results;
