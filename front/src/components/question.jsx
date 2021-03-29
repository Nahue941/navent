import React from 'react';
import styles from '../styles/oneTestContainer.module.css';
import RaddioButton from "./UI/RadioButton"

const Question = ({ question }) => {

  return (
    <div className={styles.questionContainer}>
      {question &&
        (<>
          <h2 >{question.question} </h2>
          <div className={styles.answers}>
            {question.answers.map((answer) => (

              <RaddioButton
                answer={answer}
                questionId={question.id}
                key={answer.id} />

            ))}
          </div>
        </>
        )}
    </div>
  );
};
export default Question;
