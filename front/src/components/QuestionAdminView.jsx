import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/editTestView.module.scss';
import dropDown from '../assets/dropdown.png';
import AnswerAdminView from './AnswerAdminView';
import trash from '../assets/Trash.png';
import edit from '../assets/Edit.png';
import ModalEdit from '../components/ModalAdmin';
import { deleteQuestion } from '../state/questions/actions';
import {getIndexOf} from '../utils/test'

function QuestionAdminView() {
  const [modal, setModal] = useState(false);
  const skillId = useSelector((state) => state.test.editTest.skillId);
  const getModal = (value) => {
    setModal(value);
  };
  const hideModal = () => {
    setModal(false);
  };

  const dispatch = useDispatch();
  const test = useSelector((state) => state.test.editTest);
  const questions = test?.questions;

  const [showAnswer, setShowAnswer] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div className={styles.container1}>
      {questions?.map((question, i) => {
        return (
          <div key={question.id} className={`${styles.items}`}>
            <div
              className={`${styles.questionHeader} `}
              onClick={() => {
                setShowAnswer(!showAnswer);
                setId(question.id);
              }}
            >
              <h2>{question.question}</h2>
              <img src={dropDown} alt="dropDown" className={styles.dropDown} />
            </div>

            <div className={styles.answersContainer}>
              {showAnswer &&
                id === question.id &&
                question.answers?.map((answer) => (
                  <div key={answer?.id} className={styles.answers}>
                    <AnswerAdminView answer={answer} />
                  </div>
                ))}
            </div>
            {showAnswer && id === question.id && (
              <div className={styles.footerSkill}>
                {' '}
                <img
                  src={edit}
                  alt="editLogo"
                  className={styles.icons}
                  onClick={() => {
                    getModal(question.id);
                  }}
                />
                <img
                  src={trash}
                  alt="editLogo"
                  className={styles.icons}
                  onClick={() => {
                    console.log(question.testId);
                    dispatch(
                      deleteQuestion({
                        questionId: question.id,
                        skillId,
                      }),
                    );
                  }}
                />
                <ModalEdit
                  index={getIndexOf(questions,question.id)}
                  question={question}
                  answers={question.answers}
                  show={modal}
                  onHide={hideModal}
                  setModal={setModal}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default QuestionAdminView;
