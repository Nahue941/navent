import React, { useEffect, useState } from 'react';
import Question from '../components/Question';
import styles from '../styles/oneTestContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  allQuestions,
  setDisabled,
  setIndexQuestion,
  resetQuestions,
} from '../state/questions/actions';
import { results } from '../state/user/actions';
import { wrongAnswered } from '../state/answers/actions';

import { resetAnswers } from '../state/answers/actions';
import Button from '../components/UI/Button';
import Timer from '../components/Timer';
import ProgressBar from '../components/UI/ProgressBar';
import moment from 'moment' 

const TestContainer = ({ testId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.all);
  const selectedAnswers = useSelector((state) => state.answer.selectedAnswers);
  const disabled = useSelector((state) => state.question.disabled);
  const indexQuestion = useSelector((state) => state.question.indexQuestion);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(1000);

  useEffect(() => {
    dispatch(setIndexQuestion(0));
    dispatch(resetAnswers());
    dispatch(setDisabled(true));
    dispatch(allQuestions(testId)).then(() => setLoading(false));

    return () => {
      dispatch(resetQuestions());
    };
  }, [dispatch]);

  const countCorrectAnswers = () => {
    return selectedAnswers.reduce(
      (trueAnswers = 0, answer) => (trueAnswers += answer.correct ? 1 : 0),
      0,
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextQuestion = indexQuestion + 1;
    if(!selectedAnswers[indexQuestion].correct){
     dispatch(wrongAnswered(questions[indexQuestion]))
    } 

    if (nextQuestion < questions.length) {
      dispatch(setIndexQuestion(nextQuestion));
      dispatch(setDisabled(true));
      setTime(1000);
    } else {
      const res = await dispatch(
        results({
          result: ( countCorrectAnswers() / questions.length ) * 100,
          userId: 1, //user.id
          testId: Number(testId),
          date:moment().format('YYYY-MM-DD')
        }),
      );
      history.push(`/results`);
    }
  };

  //estado local que se renderiza hasta que se traiga toda la data del back
  if (loading) return <div className={styles.loading}>loading</div>;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.h2}>
          {indexQuestion + 1} de {questions.length}
        </h2>
        <ProgressBar
          questionNum={indexQuestion + 1}
          totalQuestions={questions.length}
        />
      </div>
      <div className={styles.header}>
        {questions && (
          <form onSubmit={handleSubmit}>
            <Question question={questions[indexQuestion]} />
            <br />
            <Timer time={time} setTime={setTime} countCorrectAnswers={countCorrectAnswers} />
            <br />
            <Button
              disabled={disabled}
              value={
                indexQuestion < questions.length - 1 ? 'Siguiente' : 'Finalizar'
              }
              type="submit"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default TestContainer;
