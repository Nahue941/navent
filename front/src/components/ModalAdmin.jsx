import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from './UI/Button';
import CloseIcon from './UI/CloseIcon';
import RadioButton from '../components/UI/RadioButton';

import add from '../assets/add.png';
import check from '../assets/Check.png';
import newLogo from '../assets/new.svg';
import edit from '../assets/Edit.png';
import close from '../assets/Close.png';

import { filterAnswer } from '../utils/test';

import styles from '../styles/modal.module.scss';
import styles2 from '../styles/editTestView.module.scss';

import {
  addAdminAnswer,
  actualQuestion,
  modifyAnswerState,
  updateAnswerState,
  getEditTest,
} from '../state/test/actions';
import { editQuestion } from '../state/questions/actions';
import { editAnswer } from '../state/answers/actions';
import { correctAnswer } from '../utils/test';
import { deleteAnswer } from '../state/answers/actions';

const ModalEdit = ({ question, show, onHide, answers, index, setModal }) => {
  const dispatch = useDispatch();
  const actual = useSelector((state) => state.test.actualQuestion?.answers);
  const skillId = useSelector((state) => state.test.editTest.skillId);

  const [input, showInput] = useState(false);
  const [title, showTitle] = useState(false);
  const [editAnswers, seteditAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const testId = question.testId;

  const newAnswer = (answer) => {
    return {
      correct: false,
      answer,
      questionId: question.id,
    };
  };

  const newQuestion = (question) => {
    return {
      question,
      testId,
      active: true,
    };
  };

  useEffect(() => {
    dispatch(actualQuestion(index));
  }, [actual]);

  const oldIndex = correctAnswer(actual);

  const newInput = () => {
    return (
      <div className={styles2.newAnswer}>
        <img src={newLogo} alt="newLogo" className={styles2.icons} />
        <input
          type="text"
          name="answer"
          defaultValue=""
          onKeyDown={(e) => {
            if (e.code === 'Enter' && e.target.value) {
              addNewAnswer(testId, newAnswer(e.target.value), skillId);
              showInput(false);
            }
          }}
        />
      </div>
    );
  };

  const titleInput = () => {
    return (
      <input
        type="text"
        name="title"
        id=""
        defaultValue={question.question}
        onBlur={handleSubmitTitle}
      />
    );
  };

  const handleChange = (e, correct, answerId) => {
    const updatedAnswers = filterAnswer(editAnswers, answerId);
    seteditAnswers([
      ...updatedAnswers,
      {
        answer: e.target.value,
        correct,
        questionId: question.id,
        answerId: e.target.name,
      },
    ]);
  };

  const handleSubmit = () => {
    if (!loading && editAnswers.length) {
      dispatch(editAnswer({ answers: editAnswers, skillId })).then(() => {
        setModal(false);
      });
    } else {
      setModal(false);
    }
  };

  const handleSubmitTitle = (e) => {
    const { value } = e.target;
    console.log(question.id);
    dispatch(
      editQuestion({
        editQuestion: newQuestion(value),
        skillId,
        index,
        questionId: question.id,
      }),
    );
  };

  const addNewAnswer = (testId, newAnswer, skillId) => {
    dispatch(
      addAdminAnswer({ testId, newAnswer, skillId, questionIndex: index }),
    );
  };

  const handleRemove = (answerId) => {
    dispatch(deleteAnswer({answerId,questionIndex:index,skillId}))
  }

  const ModifiyCorrectAnswer = async (index, state, oldIndex, answer) => {
    // dispatch(modifyAnswerState({ index, state, oldIndex }));
    dispatch(
      modifyAnswerState({
        answerId: answer.id,
        skillId,
        index,
        questionId: question.id,
      }),
    );
  };

  return (
    <div
      className={`${styles.modalBg} ${show && styles.active} `}
      key={question.id}
    >
      <div className={`${styles.modal} ${styles.modalEdit} `}>
        <div onClick={() => onHide()} className={styles.containerClose}>
          <CloseIcon />
        </div>
        <div className={styles.headerEditModal}>
          {title ? (
            titleInput()
          ) : (
            <h1 className={styles.h1}>{question.question}</h1>
          )}
          <img
            src={edit}
            alt="editLogo"
            className={styles.pencil}
            onClick={() => {
              showTitle(!title);
            }}
          />
        </div>
        <div className={styles.answerContainer}>
          {actual?.map((answer, i) => {
            return (
              <div className={`${styles2.answerContainer}`} key={answer.id}>
                <RadioButton
                  answer={answer}
                  adminEdit={true}
                  onClick={ModifiyCorrectAnswer}
                  index={i}
                  oldIndex={oldIndex}
                  isAdmin={true}
                />
                <input
                  type="text"
                  defaultValue={answer.answer}
                  onBlur={(e) => handleChange(e, answer.correct, answer.id)}
                  name={answer.id}
                />
                <img src={close} alt="closeLogo" className={styles.check} onClick={() => handleRemove(answer.id)}/>
                {answer.correct ? (
                  <img src={check} alt="" className={styles2.icons} />
                ) : (
                  ''
                )}
              </div>
            );
          })}
        </div>
        {input && newInput()}
        <div className={styles.answerContainerFooter}>
          <img src={add} alt="" onClick={() => showInput(!input)} />
          <Button
            color={'rgb(233, 0, 102)'}
            value={'Guardar'}
            onClick={handleSubmit}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};
export default ModalEdit;
