import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTests } from '../state/questions/actions';
import { Link } from 'react-router-dom';
import styles from '../styles/skillsView.module.scss';
import Modal from '../components/UI/Modal';

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

  useEffect(() => {
    dispatch(allTests());
  }, [dispatch]);

  return (
    <div >
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.container}>
        {tests?.map((test) => {
          return (
            <>
              <div>
                <Link
                  // to={`/test/${test.id}`}
                  onClick={() => getModal(test.id)}
                  className={`${styles.link}`}
                  key={test.id}
                >
                  <div className={styles.skills}>
                    <h2>{test.name}</h2>
                  </div>
                </Link>
                <Modal
                show={modal === test.id}
                onHide={hideModal}
                  info={test.description}
                  time={test.timeToComplete}
                  name={test.name}
                  id={test.id}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default allTestsContainer;
