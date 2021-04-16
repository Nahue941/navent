import React, { useEffect, useState } from 'react';
import ButtonEdit from '../components/UI/ButtonEdit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEditTest } from '../state/test/actions';

import ModalContainerAdmin from './ModalAdmin';
// import styles from '../styles/radioButton.module.css';
import s from '../styles/editView.module.scss';

const EditTestView = ({ skillId }) => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test.editTest);
  const tests = useSelector((state) => state.test.editTest);
  const title = test?.name;
  const description = test?.description;
  const time = test?.timeToComplete;
  const questions = tests?.questions;

  const [modal, setModal] = useState(false);

  const getModal = (value) => {
    setModal(value);
  };

  const hideModal = () => {
    setModal(false);
  };

  const newValues = {
    title: title,
    description: description,
    questions: questions,
  };

  //Nueva data para el form

  useEffect(() => {
    dispatch(getEditTest(skillId));
  }, [dispatch,modal]);

  const handleChangeRadio = (e) => {
    console.log(e.target.value);
  };

  const addAnswer = () => {};

  //cuando hago click en guardar que haga un put de los nuevos valores al back

  const handleForm = () => {
    dispatch(getEditTest(newValues));
  };

  const handleRadioChange = (e) => {
    setNewQuestion({
      ...newQuestion,
      [e.target.name]: e.target.value === 'true',
    });
  };

  return (
    <div className={s.container}>
      <h1>Editar Test</h1>
      <div className={s.buttons}>
        <div>
          <ButtonEdit color="blue" value="editar" />
          {/* <img src={editLogo} alt="edit<logo" className={styles.editLogo}/> */}
        </div>
        <div onClick={() => handleForm()}>
          <Link to="/admin/skill">
            <ButtonEdit color="blue" value="guardar" width="80px" />
          </Link>
        </div>
        <Link to="/admin/skill">
          <ButtonEdit color="blue" value="cancelar" width="80px" />
        </Link>
      </div>
      <div>
        {' '}
        <label>
          Título: <h3>{title}</h3>
          <input placeholder={title} key={skillId}></input>{' '}
        </label>
      </div>
      <label>
        Descripción: <h3>{description}</h3>
      </label>
      <br />
      <label>
        Tiempo: <h3>{time}</h3>
      </label>
      <h1>PREGUNTAS:</h1>
      <Link to={`/admin/skill/create/question/${test.id}`}>
        <ButtonEdit value="Agregar Pregunta" color="blue" width="250px" />
      </Link>
      <div>
        {questions?.map((question) => {
          return (
            <div
              key={question.id}
              className={s.questions}
              onClick={() => getModal(question.id)}
            >
              <h3>{question.question}</h3>
              <ModalContainerAdmin
                show={modal === question.id}
                question={question.question}
                onHide={hideModal}
                answers={question.answers}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditTestView;
