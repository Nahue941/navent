import React, { useState, useEffect } from 'react';
import ButtonEdit from '../components/UI/ButtonEdit';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/skills.module.scss';
import styles2 from '../styles/editTestView.module.scss';
import { getEditTest, setEditTest } from '../state/test/actions';
import { useHistory } from 'react-router-dom';

const EditTestDescription = () => {
  const test = useSelector((state) => state.test.editTest);
  const [newTest, setNewTest] = useState({});
  const [showInput, setShowInput] = useState('true');
  const history = useHistory();
  const dispatch = useDispatch();


  const handleInputTest = (e) => {
      setNewTest({ ...newTest, [e.target.name]: e.target.value });
  };

  const changeState = () => {
    if (showInput == 'true') setShowInput('false');
    if (showInput == 'false') setShowInput('true');
  };

  const handleFormTest = () => {
    dispatch(setEditTest(newTest)).then(() => history.push(`/admin/skill`));
  };

  const setNewTestEditButton = () => {
    setNewTest(test);
  }
  
  return (
    <div>
      <form>
        <div>
          <div className={styles2.container}>
            <h1>Editar Test</h1>
          </div>
          <div className={styles2.container} onClick={() => changeState()}>
            <ButtonEdit
              color="blue"
              width="80px"
              value={showInput == 'true' ? 'editar' : 'cancelar'}
              onClick={setNewTestEditButton}
            />
          </div>
          <div className={styles2.container}>

          </div>

          <div className={`${styles2.container} `}>
            <label>
              Descripción:
              {showInput == 'true' ? (
                <h3>{test?.description}</h3>
              ) : (
                <input
                  placeholder={test?.description}
                  defaultValue={test?.description}
                  name="description"
                  onChange={handleInputTest}
                ></input>
              )}
            </label>
          </div>

          <div className={styles2.container}>
            <label>
              Tiempo:
              {showInput == 'true' ? (
                <h3>{test?.timeToComplete}</h3>
              ) : (
                <input
                  placeholder={test?.timeToComplete}

                  defaultValue={test?.timeToComplete}
                  name="timeToComplete"
                  onChange={handleInputTest}
                ></input>
              )}
            </label>
          </div>

          <div className={styles2.container}>
            <label>
              Cantidad de Preguntas:
              {showInput == 'true' ? (
                <h3>{test?.qtyQuestions}</h3>
              ) : (
                <input
                  placeholder={test?.qtyQuestions}

                  defaultValue={test?.qtyQuestions}
                  name="qtyQuestions"
                  onChange={handleInputTest}
                ></input>
              )}
            </label>
          </div>

          <div className={styles2.container}>
            <label>
              Cantidad de Respuestas:
              {showInput == 'true' ? (
                <h3>{test?.qtyAnswers}</h3>
              ) : (
                <>
                  <input
                    placeholder={test?.qtyAnswers}

                    defaultValue={test?.qtyAnswers}
                    name="qtyAnswers"
                    onChange={handleInputTest}
                  ></input>
                  <br />
                  <ButtonEdit
                    onClick={handleFormTest}
                    color="blue"
                    value="Guardar Test"
                    width="150px"
                  />
                </>
              )}
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTestDescription;
