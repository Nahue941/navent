import React, { useEffect, useState } from 'react';
import styles from '../../styles/spinner.module.scss';

const Spinner = ({ radius = 150, stroke = 5, percentage }) => {
  const [progress, setProgress] = useState(0);
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(percentage);
    }, 10);

    progress === percentage && clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{percentage}%</h1>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="rgba(229, 226, 226, 0.678)"
          strokeWidth="4"
          fill="transparent"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
        />
        <circle
          className={styles.progressCircle}
          stroke="#0a26ee"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    </div>
  );
};

export default Spinner;

