import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/editTestView.module.scss';
import dropDown from '../assets/dropdown.png';
import AnswerAdminView from './AnswerAdminView';

function QuestionAdminView() {
  const test = useSelector((state) => state.test.editTest);
  const questions = test?.questions;
  const [showAnswer, setShowAnswer] = useState(false);
  const [id,setId] = useState(0)
  return (
    <div>
      {questions?.map((question) => {
        return (
          <div key={question.id}>
            <div className={styles.questionHeader} onClick={() =>{ setShowAnswer(!showAnswer)
            setId(question.id)
            // setId(...show,{id:question.id,showAnswer})
            
            }} >
              <h4>{question.question}</h4>
              <img src={dropDown} alt="dropDown" className={styles.dropDown}/>
            </div>
            
            { showAnswer  && id===question.id && question.answers?.map((answer) => (
              <AnswerAdminView key={answer.id} answer={answer.answer} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default QuestionAdminView;
