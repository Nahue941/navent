import React, {useEffect} from 'react';
import Spinner from './UI/Spinner';
import styles from '../styles/results.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { singleTest } from '../state/test/actions'
import { format } from '../utils/format'

const Results = () => {
  const numQuestions = useSelector((state) => state.answer.selectedAnswers)
    .length;
  const results = useSelector((state) => state.user.results);
  const wrongAnswers = useSelector((state) => state.answer.wronglyAnsQuestions);
  const dispatch = useDispatch()
  const singleTests = useSelector((state) => state.test.singleTest)

  useEffect(() => {
    dispatch(singleTest(results.testId))
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <h1 className={styles.h1}>Calificación</h1>
        <Spinner percentage={results.result} />
      </div>
      <div className={styles.container2}>
        <h2 className={`${styles.h2} ${styles.left}`}>
          Preguntas incorrectas: {wrongAnswers.length} de {numQuestions}
        </h2>
        <div className={styles.incorrect}>
          {wrongAnswers.map((question) => {
            console.log(question);
            return <h4 key={question.id}>{question.question}</h4> ;
          })}{' '}
        </div>
        <h3 className={styles.h3}>{`Tiempo: ${format(results.time)}`}</h3>
        <h3 className={styles.h3}>{`Puede volver a intentarlo en ${singleTests[0] && singleTests[0].daysRemaining} días`}</h3>
      </div>
    </div>
  );
};

export default Results;
