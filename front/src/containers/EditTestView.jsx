import React, { useEffect, useState } from 'react';
import Button from '../components/UI/Button';
import ButtonEdit from '../components/UI/ButtonEdit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalEdit from '../components/UI/ModalEdit';
import { getEditTest, setEditTest } from '../state/test/actions';
import RadioButton from '../components/UI/RadioButton';
import styles from '../styles/radioButton.module.css';
const EditTestView = ({ skill, skillId }) => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test.editTest);
  const title = test?.name;
  const description = test?.description;
  const time = test?.timeToComplete;
  // const answerBoolean = correct hacerlo con un checkbox

  const questions = test?.questions; // es un array de las preguntas, renderizo con un map
  const [showInput, setShowInput] = useState('true');

  const changeState = () => {
    if (showInput == 'true') setShowInput('false');
    if (showInput == 'false') setShowInput('true');
  };
  console.log(showInput);

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

  const handleClick = () => {
    if (showInput == 'true') setShowInput('false');
    if (showInput == 'false') setShowInput('true');
  };

  const handleInput = () => {};

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
      <div>
        <div></div>

        <div>
          <h1>Editar Test</h1>
        </div>
        <div onClick={() => changeState()}>
          <ButtonEdit color="blue" value="editar" />
        </div>
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
            {questions?.map((x) => {
              return (
                <div key={x.id}>
                  <label>
                    Pregunta:
                    {showInput == 'true' ? (
                      <h3>{x.question}</h3>
                    ) : (
                      <div>
                        <input placeholder={x.question}></input>
                      </div>
                    )}
                  </label>
                  <br />{' '}
                  <label>
                    Respuestas:
                    <div>
                      {x.answers?.map((answer) => (
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
                                    value="true"
                                    
                                    
                                  />
                                  <span className={styles.checkmark}></span>
                                  <p>Correcta</p>
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
      <div onClick={() => handleForm()}>
        <Link to="/admin/skill">
          <ButtonEdit color="blue" value="guardar" width="80px" />
        </Link>
      </div>

      <div>
        <Link to="/admin/skill">
          <ButtonEdit color="blue" value="cancelar" width="80px" />
        </Link>
      </div>
    </div>
  );
};

export default EditTestView;
