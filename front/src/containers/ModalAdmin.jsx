import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/UI/Button';
import CloseIcon from '../components/UI/CloseIcon';
import styles from '../styles/modal.module.scss';

const ModalContainerAdmin = ({ question, show , onHide,answers }) => {


console.log(show);
  return (
    <div className={`${styles.modalBg} ${show && styles.active}`}>
      <div className={styles.modal}>
      <div onClick={() => 
         onHide()} className={styles.containerClose}>
        <CloseIcon />
      </div>
        <h1>{question}</h1>
        {answers.map((answer) => {
            return <h3 className={styles.h3} key={answers.id}>{answer.answer}</h3>
        })}
        <Button
          color={'rgb(233, 0, 102)'}
           value={'Guardar'}
        />
        
      </div>
    </div>
  );
};
export default ModalContainerAdmin;
