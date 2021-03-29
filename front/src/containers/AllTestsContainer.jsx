import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTests } from '../state/questions/actions';
import {Link} from "react-router-dom"
import styles from "../styles/skillsView.module.scss"

const allTestsContainer = () => {

  const dispatch = useDispatch();
  const tests = useSelector((state) => state.question.tests);

  useEffect(() => {
    dispatch(allTests());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      
      {tests.map((test) => {
        return (
         <>
          <Link to={`/test/${test.id}`} className={`${styles.link}`} key={test.id}>
          <div className={styles.skills}>
            <div>
            <h2>{test.name}</h2>
            </div>
          </div>
          </Link>
          </>
          
        );
      })}
    </div>
  );
};

export default allTestsContainer;
