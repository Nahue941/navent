import React, { useEffect, useState } from 'react';
import ButtonEdit from '../components/UI/ButtonEdit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEditTest } from '../state/test/actions';
// import styles from '../styles/radioButton.module.css';
import styles from '../styles/editView.module.scss';

import editLogo from '../assets/Edit.png';
import addLogo from '../assets/add.png';
const EditTestView = ({ skillId }) => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test.editTest);
  const title = test?.name;
  const description = test?.description;
  const time = test?.timeToComplete;
  // const answerBoolean = correct hacerlo con un checkbox

  const tests = useSelector((state) => state.test.editTest);
  // const answerBoolean = correct hacerlo con un checkbox

  const questions = tests?.questions; // es un array de las preguntas, renderizo con un map
  const [showInput, setShowInput] = useState('true');

  const changeState = () => {
    if (showInput == 'true') setShowInput('false');
    if (showInput == 'false') setShowInput('true');
  };

  //Nueva data para el form
  const newValues = {
    title: title,
    description: description,
    questions: questions,
  };
  console.log(newValues);

  useEffect(() => {
    dispatch(getEditTest(skillId));
  }, [dispatch]);

  //Nueva data para el form

  useEffect(() => {
    dispatch(getEditTest(skillId));
  }, [dispatch]);

  const handleChangeRadio = (e) => {
    console.log(e.target.value);
  };

const addAnswer = () => {

}

  //cuando hago click en guardar que haga un put de los nuevos valores al back

  const handleForm = () => {
    dispatch(getEditTest(newValues));
  };

  const handleRadioChange = (e) => {
    setNewQuestion({
      ...newQuestion,
      [e.target.name]: e.target.value === 'true',
    });
    console.log(newQuestion);
  };

  // {skills?.map((skill) => (
  //     <Skill key={skill.id} skill={skill} />
  //   ))}
  // {showInput=='true'? <h3>show</h3>: <input placeholder="not show" key="1" ></input>}
  return (
    <div>
      <h1>Editar Test</h1>
      <div className={styles.buttons}>
        <div onClick={() => changeState()}>
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
      <div></div>
      <div>
        {' '}
        <label>
          Título:{' '}
          {showInput == 'true' ? (
            <h3>{title}</h3>
          ) : (
            <input placeholder={title} key={skillId}></input>
          )}{' '}
        </label>
      </div>
      <label>
        Descripción:{' '}
        {showInput == 'true' ? (
          <h3>{description}</h3>
        ) : (
          <input placeholder={description} key={skillId}></input>
        )}
      </label>
      <br />
      <label>
        Tiempo:{' '}
        {showInput == 'true' ? (
          <h3>{time}</h3>
        ) : (
          <input placeholder={time} key={skillId}></input>
        )}
      </label>
      <h1>PREGUNTAS:</h1>
      <Link to={`/admin/skill/create/question/${test.id}`}>
        <ButtonEdit value="Agregar Pregunta" color="blue" width="250px" />
      </Link>
      <div>
        <h3>
          {questions?.map((question) => {
            return (
              <div key={question.id}>
                <label>
                  Pregunta:
                  {showInput == 'true' ? (
                    <h3>{question.question}</h3>
                  ) : (
                    <div>
                      <input placeholder={question.question}></input>
                    </div>
                  )}
                </label>
                <br />{' '}
                <label>
                    
                  <img
                    src={addLogo}
                    alt="addlogo"
                    className={styles.addLogo}
                  />
                  Respuestas:
                  <div>
                    {question.answers?.map((answer) => (
                      <div key={answer.id}>
                        {showInput == 'true' ? (
                          <p>{answer.answer} </p>
                        ) : (
                          <input
                            placeholder={answer.answer}
                            key={answer.id}
                          ></input>
                        )}
                        {answer.correct.toString()}
                        {showInput == 'true' ? null : (
                          <span>
                            <div className={styles.body}>
                              <label className={styles.radioBtn}>
                                <input
                                  required
                                  type="radio"
                                  name={answer.questionId}
                                  value={answer.id}
                                  onClick={handleChangeRadio}
                                />
                                <span className={styles.checkmark}></span>
                                <p>
                                  {answer.correct ? 'correcta' : 'incorrecta'}
                                </p>
                              </label>
                            </div>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </label>
              </div>
            );
          })}
        </h3>
      </div>
    </div>
  );
};

export default EditTestView;
