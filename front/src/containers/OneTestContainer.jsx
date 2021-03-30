import React, { useEffect } from 'react';
import Question from '../components/Question';
import styles from '../styles/oneTestContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { allQuestions, setDisabled, setIndexQuestion } from '../state/questions/actions';
import { resetAnswers } from '../state/answers/actions';
import Button from '../components/UI/Button'


const TestContainer = ({ id }) => {
  const histroy = useHistory();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.all);
  const selectedAnswers = useSelector((state) => state.answer.selectedAnswers)
  const disabled = useSelector((state) => state.question.disabled)
  const indexQuestion = useSelector((state) => state.question.indexQuestion)

  useEffect(() => {
    dispatch(allQuestions(id))
    dispatch(setIndexQuestion(0))
    dispatch(resetAnswers())
  }, [dispatch]);


  const countCorrectAnswers = () => {
    return selectedAnswers.reduce((trueAnswers = 0, answer) => trueAnswers += answer.correct ? 1 : 0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextQuestion = indexQuestion + 1;
    if (nextQuestion < questions.length) {
      dispatch(setIndexQuestion(nextQuestion));
      dispatch(setDisabled(true))
    }
    else {
      alert(`Respuestas correctas: ${countCorrectAnswers()}/${questions.length}`);
      histroy.push('/');
    }
  }

  return (
    <div className={styles.container}>

      {questions && (
        <form onSubmit={handleSubmit}>
          <Question
            question={questions[indexQuestion]}
          />
          <br />
          <br />
            <Button disabled={disabled} value={indexQuestion<questions.length-1 ? 'Siguiente' : 'Finalizar' } type="submit" />
        </form>
      )}
    </div>
  )
};

export default TestContainer;
