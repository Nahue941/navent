import React from 'react';
import styles from '../styles/editTestView.module.scss';


const AnswerAdminView = ({answer}) => {
  return(
    <div key={answer.id} className={styles}>
    <h2 key={answer.id}>{answer}</h2>
  </div>
  )

};

export default AnswerAdminView;