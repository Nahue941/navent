import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../UI/Button';
import {format} from '../../utils/format'
import PlayIcon from '../UI/PlayIcon';
import CloseIcon from '../UI/CloseIcon';
import {useDispatch} from 'react-redux'
import styles from '../../styles/modal.module.scss'
import {timeLogger} from '../../state/time/actions'
import {setDisabled} from '../../state/questions/actions'
//agregar ultimo resultado
//poner lo intentaste
//poner los exitos en %
//traer el resultado más reciente
//crear una key en el modal que diga ultimo intento y de ahi lo mando al axios
const Modal = ({ qty, info, time, name, id, onHide, show, daysRemaining, lastResult, lastTime ,modalType, handleSubmit }) => {
  const timeMin = Math.round(time / 1000);
  const history = useHistory()
   lastTime = format(lastTime)
   const dispatch = useDispatch()

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
          <h3> Cantidad de preguntas: {qty}</h3>
          <h3>Tiempo por pregunta: {timeMin} segundos</h3>
          {daysRemaining > 0 ?
            <>
            <h3>Útima calificación:{lastResult} %  </h3>
            <h3>Tiempo tardado: {lastTime}</h3>
            <p className={styles.error}>Ya intentaste realizar esta prueba. Debes esperar {daysRemaining} días para volver a intentarlo.</p>
            </>
          :
          <Link to={`/test/${id}`} className={styles.container}>
            <PlayIcon onClick={() => {
              dispatch(setDisabled)
            }}/>
          </Link>        
          }

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
