import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import {
  allQuestions,
  setDisabled,
  setIndexQuestion,
} from '../state/questions/actions';
import { results } from '../state/user/actions';
import { wrongAnswered } from '../state/answers/actions';
import { timeReset } from '../state/time/actions';

import Question from '../components/Question';
import Button from '../components/UI/Button';
import Timer from '../components/Timer';
import ProgressBar from '../components/UI/ProgressBar';

import styles from '../styles/oneTestContainer.module.css';

const TestContainer = ({ testId }) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.question.all);
  const selectedAnswers = useSelector((state) => state.answer.selectedAnswers);
  const disabled = useSelector((state) => state.question.disabled);
  const indexQuestion = useSelector((state) => state.question.indexQuestion);
  const {total} = useSelector((state) => state.time);

  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    if (questions) {
      if (!questions.length) {
        dispatch(allQuestions(testId))
          .then(() =>setTimeout(()=> setLoading(false),1500))
          .catch(() => history.push(`/404`));
        dispatch(setIndexQuestion(0));
      }
    } else {
      history.push(`/404`);
    }

    setLoading(false);
  
  }, [dispatch]);

  const countCorrectAnswers = () => {
    return selectedAnswers.reduce(
      (trueAnswers = 0, answer) => (trueAnswers += answer?.correct ? 1 : 0),
      0,
    );
  };

  const handleSubmit = async (e) => {
   
    if (e) e.preventDefault();
    const nextQuestion = indexQuestion + 1;

    if (
      !selectedAnswers[indexQuestion] ||
      !selectedAnswers[indexQuestion].correct
    ) {
      dispatch(wrongAnswered(questions[indexQuestion]));
    }

    if (nextQuestion < questions.length) {
      dispatch(setIndexQuestion(nextQuestion));
      dispatch(setDisabled(true));
      dispatch(timeReset(1000));
    } else {
      const res = await dispatch(
        results({
          result: (countCorrectAnswers() / questions.length) * 100,
          userId: 1, //user.id
          testId: Number(testId),
          date: moment().format('YYYY-MM-DD'),
          time:total,
        }),
      );
      history.push({ pathname: '/results', state: { testId } });
    }
  };

  //estado local que se renderiza hasta que se traiga toda la data del back
  if (loading) return <div className={styles.loading}>loading</div>;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.h2}>
          {indexQuestion + 1} de{' '}
          {questions ? questions.length : history.push(`/404`)}
        </h2>
        <ProgressBar
          questionNum={indexQuestion + 1}
          totalQuestions={questions ? questions.length : history.push(`/404`)}
        />
      </div>
      <div className={styles.header}>
        {questions && (
          <form onSubmit={handleSubmit}>
            <div className={styles.timerDiv}>
            <Timer
              countCorrectAnswers={countCorrectAnswers}
              handleSubmit={handleSubmit}
              setAnswerIndex={selectedAnswers[indexQuestion]}
              className={styles.timer}
            />
            </div>
            <Question question={questions[indexQuestion]} />
            <br />
            <br />
            <Button
              disabled={disabled}
              value={
                indexQuestion < questions.length - 1 ? 'Siguiente' : 'Finalizar'
              }
              type="submit"
              color="blue"
              marginLeft="38%"
              marginTop="-5%"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default TestContainer;
