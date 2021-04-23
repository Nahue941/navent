import React, { useEffect, useState } from 'react';
import ButtonEdit from '../components/UI/ButtonEdit';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEditTest, actualIndexQuestion } from '../state/test/actions';
// import styles from '../styles/editView.module.scss';
import styles from '../styles/radioButton.module.css';
import styles2 from '../styles/editTestView.module.scss';
import EditTestDescription from './EditTestDescription';
import QuestionAdminView from '../components/QuestionAdminView';
import ActiveTogglerButton from '../components/ActiveTogglerTest'

const EditTestView = ({ skillId }) => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test.editTest);


  useEffect(() => {
    console.log(`skillid`,skillId)
    dispatch(getEditTest(skillId));
  }, [dispatch]);

  //manejo del radio button para la respuesta correcta y las incorrectas, sin terminar, se puede borrar porque no funciona
  const handleChangeRadio = (e) => {
    let correct = [e.target.value.split(',')][0][0] == 'false' ? false : true;
    let answerId = Number([e.target.value.split(',')][0][1]);
    if (correct == true) {
      setOnClickTrue(false);
      setOnClickTrueIndex(answerId);
    }
    if (correct == false) {
      setOnClickTrue(true);
      setOnClickTrueIndex(answerId);
    }
  };

  //manda los nuevos valores al back
  const handleFormTest = () => {
    dispatch(setEditTest(newTest)).then(() => history.push(`/admin/skill`));
  };
  
  const handleFormQuestion = () => {
    dispatch(setEditQuestion(newTest)).then(() => history.push(`/admin/skill`));
  };
  return (
    <div>
      <div>
        <EditTestDescription />
        <ActiveTogglerButton testId={test?.id}/>
      </div>
      <div>
        <div className={styles2.container}>
          <Link to={`/admin/skill/create/question/${test?.id}`}>
            <ButtonEdit value="Agregar Pregunta" color="blue" width="150px" />
          </Link>
        </div>

        <div className={styles2.questionBox}>
        <h1>PREGUNTAS</h1>
          <QuestionAdminView />
        </div>
      </div>
      <div className={styles2.container}>
        <div>
          <ButtonEdit color="blue" value="guardar" width="80px" />
        </div>
        <div>
          <Link to="/admin/skill">
            <ButtonEdit color="blue" value="cancelar" width="80px" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditTestView;