import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { allTests } from '../state/questions/actions';
import { clear } from '../state/user/actions';
import { timeLogger, totalTimeReset } from '../state/time/actions';
import { resetQuestions } from '../state/questions/actions';
import { resetAnswers } from '../state/answers/actions';


import ModalContainer from './ModalContainer';
import Background from '../components/UI/Background';
import styles from '../styles/skillsView.module.scss';

const allTestsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear());
    dispatch(allTests()); 

      dispatch(resetAnswers());
      dispatch(resetQuestions());
      dispatch(timeLogger(1000));
      dispatch(totalTimeReset());
    ;//aca habria que mandar el userId
  }, [dispatch]);

  return (
    <>
      <Background />
      <div className={styles.main}>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.container}>
          <ModalContainer />
        </div>
      </div>
    </>
  );
};

export default allTestsContainer;
