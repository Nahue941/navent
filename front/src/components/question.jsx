import React from 'react';
import styles from '../styles/oneTestContainer.module.css';
import Button from "../components/UI/Button"

const Question = (question) => {
  //console.log(question);
  return (
    <div>
      <h2>{question.question} </h2>
      <div className={styles.answers}>
        {question.answers.map((answer) => (
          <>
          <Button answer={answer}/>
            <label key={answer.id}>
              {' '}
              {answer.answer}
              <input type="radio" name={question.question} />
            </label>
          </>
        ))}
      </div>
    </div>
  );
};
export default Question;
