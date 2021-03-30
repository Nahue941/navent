import React, { useEffect, useState } from 'react';
import Question from '../components/Question';
import styles from '../styles/oneTestContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { allQuestions } from '../state/questions/actions';
import Button from '../components/UI/Button'


const TestContainer = ({ id }) => {
  const histroy = useHistory();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.all);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    dispatch(allQuestions(id));
  }, [dispatch]);


  const handleRadioButtonValue = (e, answer) => {
    const auxArray = selectedAnswers;
    auxArray[answer.questionId] = answer;
    setSelectedAnswers(auxArray);
    console.log(selectedAnswers)
  }

  const countCorrectAnswers = () => {
    return selectedAnswers.reduce((trueAnswers = 0, answer) => trueAnswers += answer.correct ? 1 : 0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
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
            question={questions[currentQuestion]}
            onClick={handleRadioButtonValue}
          />
          <br />
          <br />
          {currentQuestion<questions.length-1 ? (
            <Button value="Siguiente" type="submit" />
          ):(
            <Button value="Finalizar" type="submit" />

          )}
        </form>
      )}
    </div>
  )
};

export default TestContainer;
