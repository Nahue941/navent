import React from 'react';
import styles from '../styles/footer.module.css';
// import NaventLogo from '../../public/';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul>
          <img
            className={styles.logo}
            src={process.env.PUBLIC_URL + '/NaventFooter.svg'}
            alt="Footer logo"
          />
        </ul>
      </div>
      <div className={styles.text}>
        <ul>Echeverría 874 | Argentina | (+5411) 5032-1200 | Contacto</ul>
      </div>
      <div className={styles.textSmall}>
        <ul>
          Grupo Navent S.R.L., Echeverría 874 Piso 1, inscripta en IGJ
          25/07/2013, bajo el N° 7456, Libro 141 de Sociedad de Responsabilidad
          Limitada. CUIT 30-71417206-5.
        </ul>
      </div>
    </div>
  );
};

export default Footer;
