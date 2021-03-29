import React, { useEffect, useState } from 'react';
import Question from '../components/question';
import styles from '../styles/oneTestContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { allQuestions } from '../state/questions/actions';
import Button from '../components/UI/Button'


const TestContainer = ({ id }) => {

  const histroy = useHistory();

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.all);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

    useEffect(() => {
      dispatch(allQuestions(id));
    }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Respuestas correctas: ${countTrueAnswers()}/${questions.length}`);
    histroy.push('/');
  }

  const handleRadioButtonValue = (e, answer) => {
    const auxArray = selectedAnswers;
    auxArray[answer.questionId] = answer;
    setSelectedAnswers(auxArray);
  }

  const countTrueAnswers = () => {
    return selectedAnswers.reduce((trueAnswers = 0, answer) => trueAnswers += answer.correct? 1 : 0, 0)
  }


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {questions &&
          questions.map((question) => (
            <Question
              key={question.id}
              question={question}
              answers={question.answers}
              onClick = {handleRadioButtonValue}
            />
          ))}
        <br />
        <br />
        <Button value="Enviar" type="submit" />
      </form>
    </div>
  );
};

export default TestContainer;
