import React from 'react';
import styles from '../styles/oneTestContainer.module.css';
import Button from "../components/UI/Button"

const Question = ({question}) => {
  
  return (
    <div>
      <h2 >{question.question} </h2>
      <div className={styles.answers}>
        {question.answers.map((answer) => (
          
          <Button answer={answer} questionId={question.id} key={answer.id}/>
          
        ))}
      </div>
    </div>
  );
};
export default Question;
