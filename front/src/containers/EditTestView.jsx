import React, { useEffect, useState } from 'react';
import ButtonEdit from '../components/UI/ButtonEdit';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEditTest, actualIndexQuestion } from '../state/test/actions';
import Button from '../components/UI/Button';
import { setEditTest } from '../state/test/actions';
import ModalEdit from '../components/UI/ModalEdit';
import styles from '../styles/skills.module.scss';
import styles2 from '../styles/editTestView.module.scss';

import editLogo from '../assets/Edit.png';
import addLogo from '../assets/add.png';

import EditTestDescription from './EditTestDescription';

const EditTestView = ({ skillId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const test = useSelector((state) => state.test.editTest);
  const questions = test?.questions; // es un array de las preguntas, renderizo con un map

  useEffect(() => {
    dispatch(getEditTest(skillId));
  }, [dispatch]);

  return (
    <div>
      <div>
        <EditTestDescription />
      </div>
      <div>
        <div className={styles2.container}>
          <h3>PREGUNTAS:</h3>

        </div>

        <div className={styles2.container}>
          <Link to={`/admin/skill/create/question/${test?.id}`}>
            <ButtonEdit value="Agregar Pregunta" color="blue" width="150px" />
          </Link>
        </div>

        <div className={styles2.container}>
          <div>
            <h3>
              {questions?.map((question, index) => {
                return (
                  <div key={question.id} className={index % 2 ? styles.skills2 : styles.skills}>

                    {
                      <div>
                        <span>{question.question} </span><span>{question.active ? "activa" : "inactiva"}</span>

                      </div>
                    }

                    <br />{' '}

                  </div>
                );
              })}
            </h3>
          </div>
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