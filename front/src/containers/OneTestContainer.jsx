import React, { useEffect, useState } from 'react';
import Question from '../components/Question';
import styles from '../styles/oneTestContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { allQuestions, setDisabled, setIndexQuestion, resetQuestions } from '../state/questions/actions';
import { resetAnswers } from '../state/answers/actions';
import Button from '../components/UI/Button'
import Timer from '../components/Timer'


const TestContainer = ({ id }) => {
  const histroy = useHistory();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.all);
  const tests = useSelector((state) => state.question.tests);
  const selectedAnswers = useSelector((state) => state.answer.selectedAnswers);
  const disabled = useSelector((state) => state.question.disabled);
  const indexQuestion = useSelector((state) => state.question.indexQuestion);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(3000);

  // let testTime = tests[id].timeToComplete
  // console.log(testTime)

  useEffect(() => {
    dispatch(setIndexQuestion(0));
    dispatch(resetAnswers());
    dispatch(setDisabled(true));
    dispatch(allQuestions(id))
      .then(()=> setLoading(false));

    return () => {
      dispatch(resetQuestions());
    }
  }, [dispatch]);
  
  const countCorrectAnswers = () => {
    return selectedAnswers.reduce((trueAnswers = 0, answer) => trueAnswers += answer.correct ? 1 : 0, 0);
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const nextQuestion = indexQuestion + 1;
    if (nextQuestion < questions.length) {
      dispatch(setIndexQuestion(nextQuestion));
      dispatch(setDisabled(true));
      setTime(6000)
    }
    else {
      setTime(0)
      alert(`Respuestas correctas: ${countCorrectAnswers()}/${questions.length}`);
      histroy.push('/');
    }
  }
  
  //estado local que se renderiza hasta que se traiga toda la data del back
  if(loading) return <div className={styles.loading}>loading</div>

  console.log("index",indexQuestion)
  
  return (
    <div className={styles.container}>

      {questions && (
        <form onSubmit={handleSubmit}>
          <Question
            question={questions[indexQuestion]}
          />
          <br />
          <Timer time={time} setTime={setTime}/>
          <br />
            <Button 
            disabled={disabled} 
            value={indexQuestion<questions.length-1 ? 'Siguiente' : 'Finalizar' } type="submit" />
        </form>
      )}
    </div>
  )
};

export default TestContainer;
