import React from 'react';
import styles from '../../styles/modal.module.scss';
import { Link } from 'react-router-dom';
import PlayIcon from '../UI/PlayIcon';
import CloseIcon from '../UI/CloseIcon';
//agregar ultimo resultado
//poner lo intentaste
//poner los exitos en %
//traer el resultado más reciente
//crear una key en el modal que diga ultimo intento y de ahi lo mando al axios
const Modal = ({ info, time, name, id, onHide, show, daysRemaining, lastResult, lastTime, times }) => {
  const timeMin = time / 60;

  return (
    <>
      <div className={`${styles.modalBg} ${show && styles.active}`}>
        <div className={styles.modal}>
          <div onClick={onHide} className={styles.containerClose}>
            <CloseIcon />
          </div>

          <h2 className={styles.h2}>{name}</h2>
          <h3> {info}</h3>
          <h3>Tiempo por pregunta: {timeMin} min</h3>
          {daysRemaining > 0 ?
            <>
            <h3>Tu última calificación fue de {lastResult} %  de preguntas correctas en {lastTime} segundos.</h3>
            <h3>Intentos: {times}</h3>
            <p className={styles.error}>Ya intentaste realizar esta prueba. Debes esperar {daysRemaining} días para volver a intentarlo.</p>
            </>
          :
          <Link to={`/test/${id}`} className={styles.container}>
            <PlayIcon />
          </Link>
          
          }

        </div>
      </div>
    </>
  );
};
export default Modal;
