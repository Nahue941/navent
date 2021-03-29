import React, { useEffect } from 'react';
import Question from '../components/question';
import styles from '../styles/oneTestContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { allQuestions } from '../state/questions/actions';
import Button from '../components/UI/Button'


const TestContainer = ({id}) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.all);

  useEffect(() => {
    dispatch(allQuestions(id));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <form>
        {questions &&
          questions.map((question) => (
            <Question
              key={question.id}
              question={question}
              answers={question.answers}
            />
          ))}
          <br /><br />
        <Button value="Enviar" type="submit"/>
      </form>
    </div>
  );
};

export default TestContainer;
