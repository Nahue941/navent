import React from 'react';
import styles from '../../styles/progressBar.module.scss';

const ProgressBar = ({ questionNum , totalQuestions}) => {
  const percentage =   (questionNum / totalQuestions)*100;
  return (
    <div className={`${styles.mainDiv} `}>
      <div
        className={`${styles.bar} ${styles.barDiv} `}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
