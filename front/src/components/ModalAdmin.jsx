import React, { useEffect, useState  } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import Button from './UI/Button';
import CloseIcon from './UI/CloseIcon';
import styles from '../styles/modal.module.scss';
import check from '../assets/Check.png';
import styles2 from '../styles/editTestView.module.scss';
import add from '../assets/add.png';
import RadioButton from '../components/UI/RadioButton';
import { addAdminAnswer, actualQuestion , modifyAnswerState , updateAnswerState} from '../state/test/actions';


import {correctAnswer} from '../utils/test'

const ModalEdit = ({ question, show, onHide, answers, index }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actualQuestion(index));
  }, []);

  const actual = useSelector((state) => state.test.actualQuestion.answers)
  
  // const  answerQuestion = useSelector((state) => state.test.actualQuestion).answers[index].correct
  const oldIndex = correctAnswer(actual)
  const newInput = () => {
    return <input type="text" name="answer" />;
  };

  const addNewAnswer = () => {
      
  };

  const ModifiyCorrectAnswer = (index,state, oldIndex) => {
    dispatch(modifyAnswerState({index,state, oldIndex}))
    // dispatch(updateAnswerState(index))

  }

  const [input, showInput] = useState(false);

  return (
    <div
      className={`${styles.modalBg} ${show && styles.active} `}
      key={question}
    >
      <div className={`${styles.modal} ${styles.adminModalEdit}`}>
        <div onClick={() => onHide()} className={styles.containerClose}>
          <CloseIcon />
        </div>
        <h1>{question}</h1>
        {actual?.map((answer,i) => {
          return (
            <div className={`${styles2.answerContainer}`} key={answer.id}>
              <RadioButton
                answer={answer}
                questionId={question.id}
                selectedId={answer.correct && answer.id}
                adminEdit={true}
                onClick={ModifiyCorrectAnswer}
                index={i}
                oldIndex={oldIndex}
                state={answer.correct}
                isAdmin={true}
              />
              <input type="text" defaultValue={answer.answer} />
              {answer.correct ? (
                <img src={check} alt="" className={styles2.icons} />
              ) : (
                ''
              )}
            </div>
          );
        })}
        {input && newInput()}
        <img src={add} alt="" onClick={() => showInput(!input)} />
        <Button color={'rgb(233, 0, 102)'} value={'Guardar'} />
      </div>
    </div>
  );
};
export default ModalEdit;
