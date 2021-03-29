import React, { useEffect, useState } from 'react';
import Question from '../components/question';
import styles from '../styles/oneTestContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { allQuestions } from '../state/questions/actions';
import Button from '../components/UI/Button'


const TestContainer = ({ id }) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.all);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    dispatch(allQuestions(id));
  }, [dispatch]);

  const handleAnswerButtonClick = (e) => {
    e.preventDefault()
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else {
      alert("¡Terminaste el test!")
    }
  }

  return (
    <div className={styles.container}>

      <form>
        {questions && (
          <form onSubmit={handleAnswerButtonClick}>
            <Question
              question={questions[currentQuestion]}
            />
            <br />
            <br />
            <Button value="Siguiente" type="submit" />
          </form>
        )}
        <br />
        <br />
        <Button value="Enviar" type="submit" />
      </form>
    </div>
  )
};

export default TestContainer;
