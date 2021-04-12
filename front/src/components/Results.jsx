import React, { useEffect } from 'react';
import Spinner from './UI/Spinner';
import styles from '../styles/results.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { singleTest } from '../state/test/actions';
import { format } from '../utils/format';
import { useLocation } from "react-router-dom";

const Results = () => {
  
  const {state:{testId}} = useLocation();
  const numQuestions = useSelector((state) => state.answer.selectedAnswers)
    .length;
  const results = useSelector((state) => state.user.results);
  const wrongAnswers = useSelector((state) => state.answer.wronglyAnsQuestions);
  const dispatch = useDispatch();
  const singleTests = useSelector((state) => state.test.singleTest);
console.log(testId);
  useEffect(() => {
    testId && dispatch(singleTest(testId));
  }, [testId]);

  return (
    <div className={styles.main}>
      {results && (
        <>
          <div className={styles.container1}>
            <h1 className={styles.h1}>Calificación</h1>
            <Spinner percentage={results?.result} />
          </div>
          <div className={styles.container2}>
            <h2 className={`${styles.h2} ${styles.left}`}>
              Preguntas incorrectas: {wrongAnswers.length} de {numQuestions}
            </h2>
            <div className={styles.incorrect}>
              {wrongAnswers.map((question) => {
                return <h4 key={question.id}>{question.question}</h4>;
              })}{' '}
            </div>
            <h3 className={styles.h3}>{`Tiempo: ${format(results.time)}`}</h3>
            <h3 className={styles.h3}>{`Puede volver a intentarlo en ${
              singleTests && singleTests[0]?.daysRemaining
            } días`}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
