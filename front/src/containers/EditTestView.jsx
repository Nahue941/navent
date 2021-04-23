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
  const testId = useSelector(state => state.test.editTest.questions?.[0].testId)

  useEffect(() => {
    dispatch(getEditTest(skillId));
  }, [dispatch]);

  return (
    <div>
      <div>
        <EditTestDescription />
        <ActiveTogglerButton testId={testId}/>
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
