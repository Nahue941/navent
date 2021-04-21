import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import trophy from '../assets/ribbon.png';
import Modal from '../components/UI/Modal';
import styles from '../styles/skillsView.module.scss';
import clock from '../assets/Clock.jpg';
import { resultTests } from '../utils/test';
import {timeLogger} from '../state/time/actions'

const ModalContainer = () => {
  const [modal, setModal] = useState(false);
  const tests = useSelector((state) => state.test.all);
  const results = resultTests(tests);
  const dispatch = useDispatch()

  const getModal = (value) => {
    setModal(value);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <>
      {tests?.map((test, i) => {
        return (
          <div key={test.id}>
            <div onClick={() => {
              getModal(test.id)
              dispatch(timeLogger(test.timeToComplete/10))}} className={styles.link}>
              <div
                className={`${styles.skills} ${
                  test.daysRemaining > 0 && styles.disabled
                }`}
              >
                <h2>{test.name}</h2>
                {results[i] && (
                  <img src={clock} alt="clockLogo" className={styles.trophy} />
                )}
                {results[i] >= 70 && (
                  <div className={styles.trophyDiv}>
                    <img
                      src={trophy}
                      alt="trophyLogo"
                      className={styles.trophy}
                    />
                  </div>
                )}
              </div>
            </div>
            <Modal
              show={modal === test.id}
              onHide={hideModal}
              info={test.description}
              time={test.timeToComplete}
              name={test.name}
              qty={test.qtyQuestions}
              id={test.id}
              daysRemaining={test.daysRemaining}
              modalType="testModal"
              lastResult={Math.round(results[i])}
              lastTime={tests[i].testResultTime}
            />
          </div>
        );
      })}
    </>
  );
};

export default ModalContainer;
