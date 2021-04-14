import React from 'react';
import styles from '../styles/oneTestContainer.module.css';
import RaddioButton from './UI/RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import { setDisabled } from '../state/questions/actions';
import { addAnswer } from '../state/answers/actions';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const indexQuestion = useSelector((state) => state.question.indexQuestion);
  const selectedAnswers = useSelector((state) => state.answer.selectedAnswers);
  const selectedAnswer =
    selectedAnswers[indexQuestion] && selectedAnswers[indexQuestion].id;
    const handleRadioButtonValue = (e, answer) => {
    dispatch(setDisabled(false));
    dispatch(addAnswer({ index: indexQuestion, answer }));
  };
  return (
    <div className={styles.questionContainer}>
      {question && (
        <>
          <h2 className={styles.h2}>{question.question} </h2>
          <div className={styles.answers}>
            {question.answers.map((answer) => (
              <RaddioButton
                answer={answer}
                questionId={question.id}
                onClick={handleRadioButtonValue}
                key={answer.id}
                selectedId={selectedAnswer}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Question;
