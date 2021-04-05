import React, { useState } from 'react';
import Spinner from './UI/Spinner';
import styles from '../styles/results.module.scss';
import {useSelector} from "react-redux"
 

const Results = () => {
  const results = useSelector((state) => state.user.results)
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Spinner percentage={results} />
      </div>
      <div className={styles.container}>
      </div>
    </div>
  );
};

export default Results;
