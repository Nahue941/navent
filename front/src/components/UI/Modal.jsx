import React from 'react';
import styles from '../../styles/modal.module.scss';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import PlayIcon from '../UI/PlayIcon';
import CloseIcon from '../UI/CloseIcon';

const Modal = ({ info, time, name, id, onHide, show }) => {
  const timeMin = time / 60;
  return (
    <>
      <div className={`${styles.modalBg} ${show && styles.active}`}>
        <div className={styles.modal}>
          {/* <div className={styles.containerClose}> */}
          <div onClick={onHide} className={styles.containerClose}>
            <CloseIcon />
            {/* </div> */}
          </div>
          
            <h2 className={styles.h2}>{name}</h2>
            <p>Descripción: {info}</p>
            <p>Duración: {timeMin} min</p>
            <Link to={`/test/${id}`} className={styles.container}>
              <PlayIcon />
            </Link>
         
        </div>
      </div>
    </>
  );
};
export default Modal;
