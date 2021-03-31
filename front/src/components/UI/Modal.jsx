import React from 'react';
import styles from '../../styles/modal.module.scss';
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
            <h4>{info}</h4>
            <h4>Duración: {timeMin} min</h4>
            <Link to={`/test/${id}`} className={styles.container}>
              <PlayIcon />
            </Link>
         
        </div>
      </div>
    </>
  );
};
export default Modal;
