import React, { useEffect } from 'react';
import Question from '../components/question';
import styles from '../styles/oneTestContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { allQuestions } from '../state/questions/actions';


const TestContainer = (props) => {
  //Me esta dando problemas las props que se pasan a los componentes. No estan funcionando como deberian 
  const auxProps = props;
  const {id} = auxProps;
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
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default TestContainer;
