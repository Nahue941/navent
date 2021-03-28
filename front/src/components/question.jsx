import React from 'react';
import styles from '../styles/oneTestContainer.module.css';
import Button from "../components/UI/Button"

const Question = (props) => {
  //Me esta dando problemas las props que se pasan a los componentes. No estan funcionando como deberian 
  const auxProps = props;
  const {question , answers} = auxProps;
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
