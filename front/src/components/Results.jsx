import React, { useState } from 'react';
import Spinner from './UI/Spinner';
import styles from '../styles/results.module.scss';

const Results = ({ results = 90 }) => {
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
