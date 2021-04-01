import React from 'react';
import styles from '../styles/notFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.container}>
        <div>
            <img
            src={process.env.PUBLIC_URL + '/error-page-404.5d3d2368.svg'}
            alt="not found 404"
            />
        </div>
    
        <div className={styles.title}>
            No encontramos la página que buscás
        </div>

        <div className={styles.subtitle}>
            Cambió de identidad, se movió de lugar o dejó de existir.
        </div>

    </div>
  );
};

export default NotFound;
