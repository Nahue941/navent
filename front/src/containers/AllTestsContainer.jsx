import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTests } from '../state/questions/actions';
import styles from '../styles/skillsView.module.scss';
import Modal from '../components/UI/Modal';
import {resetQuestions} from "../state/questions/actions"
import { resetAnswers } from '../state/answers/actions';
import {clear} from "../state/user/actions"

const allTestsContainer = () => {
  const [modal, setModal] = useState(false);

  const getModal = (value) => {
    setModal(value);
  };

  const hideModal = () => {
    setModal(false);
  };

  const dispatch = useDispatch();
  const tests = useSelector((state) => state.question.tests);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(clear())
    dispatch(resetAnswers())
    dispatch(resetQuestions())
    dispatch(allTests(user.id));
  }, [dispatch]);

  return (
    <>
      <div className={styles.bcImage}>
        <img
          src="https://www.bumeran.com.ar/candidate/static/media/ads-logos-carousel-bg-layer-1.c941fb44.svg"
          className={styles.img}
          alt=""
        />
        <img
          src="https://www.bumeran.com.ar/candidate/static/media/ads-logos-carousel-bg-layer-2.debc63e4.svg"
          className={styles.img}
          alt=""
        />
      </div>
      <div className={styles.main}>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.container}>
          {tests?.map((test) => {
            return (
              <div  key={test.id}>
                <div
                  onClick={() => getModal(test.id)}
                  className={styles.link}
                >
                  <div className={`${styles.skills} ${test.daysRemaining >0 && styles.disabled}`}>
                    <h2>{test.name}</h2>
                  </div>
                </div>
                <Modal
                  show={modal === test.id}
                  onHide={hideModal}
                  info={test.description}
                  time={test.timeToComplete}
                  name={test.name}
                  id={test.id}
                  daysRemaining={test.daysRemaining}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default allTestsContainer;
