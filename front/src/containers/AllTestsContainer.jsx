import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTests } from '../state/questions/actions';
import {Link} from "react-router-dom"
import styles from "../styles/skillsView.module.scss"
// import styles from "../styles/oneTestContainer.module.css"

const allTestsContainer = () => {

  const dispatch = useDispatch();
  const tests = useSelector((state) => state.question.tests);

  useEffect(() => {
    dispatch(allTests());
  }, [dispatch]);

  return (
   <div>
    <h1 className={styles.title}>Skills</h1>
    <div className={styles.container}>
     
      {tests.map((test) => {
        return (
          <>
            <div >
          <Link to={`/test/${test.id}`} className={`${styles.link}`} key={test.id}>
          <div className={styles.skills}>
            <h2>{test.name}</h2>
            </div>
          </Link>
          </div>
          </>
          
        );
      })}
      </div>
    
      </div>
  );
};

export default allTestsContainer;
