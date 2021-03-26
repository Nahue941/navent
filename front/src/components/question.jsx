import React from 'react';
import styles from '../styles/oneTestContainer.module.css';

const Question = () => {
  return (
    <div>
      <h2>Pregunta 1</h2>
      <div className={styles.answers}>
        <label>
          Resp 1
          <input type="radio" name="Pregunta 1" id="1" />
        </label>
        <label>
          {' '}
          Resp 2
          <input type="radio" name="Pregunta 1" id="2" />
        </label>
        <label>
          Resp 3
          <input type="radio" name="Pregunta 1" id="3" />
        </label>
        <label>
          Resp 4
          <input type="radio" name="Pregunta 1" id="4" />
        </label>
      </div>
    </div>
  );
};
export default Question;
