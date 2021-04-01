import React from 'react';
import styles from '../styles/notFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.container}>

        <div className={styles.box1}>
            <img
            src={process.env.PUBLIC_URL + '/error-page-404.5d3d2368.svg'}
            alt="not found 404"
            />
        </div>

        <div className={styles.box2}>
        
            <div className={`${styles.title} ${styles.font}`}>
                <div>No encontramos la página que buscás</div>
            </div>

            <div className={`${styles.subtitle} ${styles.font}`}>
                Cambió de identidad, se movió de lugar o dejó de existir.
            </div>
        
        </div> 

    </div>
  );
};

export default NotFound;
