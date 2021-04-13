import React from 'react';
import styles from '../../styles/skillsView.module.scss';

function Background() {
  return (
    <div className={styles.bcImage}>
      <img
        src="https://www.bumeran.com.ar/candidate/static/media/ads-logos-carousel-bg-layer-1.c941fb44.svg"
        className={styles.img}
        alt=""
      />
      <img
        src="https://www.bumeran.com.ar/candidate/static/media/ads-logos-carousel-bg-layer-2.debc63e4.svg"
        className={styles.img}
        alt=""
      />
    </div>
  );
}

export default Background;
