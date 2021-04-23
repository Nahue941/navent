import React from 'react';
import styles from '../styles/editTestView.module.scss';
import check from '../assets/Check.png'

const AnswerAdminView = ({answer}) => {
  return(
    <div key={answer?.id} className={ `${styles.answerContainer}`} >
    <h3 key={answer?.id}>{answer?.answer}</h3>
     { answer?.correct ? <img src={check} alt="" className={styles.icons}/> : "" }
  </div>
  )

};

export default AnswerAdminView;