import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import PlayIcon from '../UI/PlayIcon';
import CloseIcon from '../UI/CloseIcon';
import Button from "../UI/Button"
import styles from '../../styles/modal.module.scss';


const Modal = ({
  info,
  time,
  name,
  id,
  onHide,
  show,
  daysRemaining,
  modalType,
  handleSubmit,
  results
}) => {
  const timeMin = time / 60;
  const history = useHistory();

  return (
    <>
      <div className={`${styles.modalBg} ${show && styles.active}`}>
        {modalType === 'testModal' ? (

          // Modal para entrar al test

          <div className={styles.modal}>
            <div onClick={onHide} className={styles.containerClose}>
              <CloseIcon />
            </div>
            <h2 className={styles.h2}>{name}</h2>
            <h3> {info}</h3>
            <h3>Tiempo por pregunta: {timeMin} min</h3>
            {daysRemaining > 0 ? (
              <>
              <h3>
                Último resultado: {results}%
              </h3>
              <p className={styles.error}>
                Ya intentaste realizar esta prueba. Debes esperar{' '}
                {daysRemaining} días para volver a intentarlo.
              </p>
              </>
            ) : (
              <Link to={`/test/${id}`} className={styles.container}>
                <PlayIcon />
              </Link>
            )}
          </div>
        ) : (

          //Modal para continuar el test, estas ahi?

          <div className={styles.modal}>
            <h1>¿Estas ahí para seguir?</h1>
            <h3>Esta pregunta pasó sin que la respondieras.</h3>
            <div className={styles.buttons}>
            <Button color={"rgb(233, 0, 102)"} onClick={handleSubmit} value={"Continuar"}/>
            <Button onClick={() => history.push('/test')} value={"Salir"} color={'#0000FF'}/>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Modal;
