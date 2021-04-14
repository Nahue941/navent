import React, { useDebugValue, useEffect } from 'react';
import styles from '../styles/home.module.scss';
import check from '../assets/Checkmark circle.png';

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Test de habilidades</h1>
        <div className={styles.items}>
          <img src={check} alt="checkLogo" className={styles.icon} />
          <h2>Amplia tu perfil laboral </h2>
        </div>
        <div className={styles.items}>
          <img src={check} alt="checkLogo" className={styles.icon} />
          <h2> Validá tus habilidades</h2>
        </div>
        <div className={styles.items}>
          <img src={check} alt="checkLogo" className={styles.icon} />
          <h2> Amplia tus herramientas</h2>
        </div>
      </div>
      <div className={styles.bg}></div>
    </div>
  );
};

export default Home;
