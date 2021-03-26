import React from 'react';
import Question from "../components/question"
import styles from "../styles/oneTestContainer.module.css"

const TestContainer = () => {
 const arr = [1,2,3,4,5]
  return (
    <div className={styles.container}>
      <form>
      {arr.map((el)=> <Question key={el}/>)}
      <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export default TestContainer;
