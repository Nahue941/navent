import React, { useEffect, useState } from 'react';
import ButtonEdit from '../components/UI/ButtonEdit';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEditTest, actualIndexQuestion } from '../state/test/actions';
import Button from '../components/UI/Button';
import { setEditTest } from '../state/test/actions';
import ModalEdit from '../components/UI/ModalEdit';
// import styles from '../styles/editView.module.scss';
import styles from '../styles/radioButton.module.css';
import styles2 from '../styles/editTestView.module.scss';

const EditTestView = ({ skillId }) => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test.editTest);
  const title = test?.name;
  const qtyQuestions = test?.qtyQuestions;
  const qtyAnswers = test?.qtyAnswers;
  const description = test?.description;
  const time = test?.timeToComplete;
  const history = useHistory();
  // const answerBoolean = correct hacerlo con un checkbox
  const tests = useSelector((state) => state.test.editTest);
  // const answerBoolean = correct hacerlo con un checkbox

  const questions = tests?.questions; // es un array de las preguntas, renderizo con un map
  const [showInput, setShowInput] = useState('true');
  const [OnClickTrue, setOnClickTrue] = useState(null);
  const [OnClickTrueIndex, setOnClickTrueIndex] = useState(Number());
  //   console.log([OnClickTrue, OnClickTrueIndex, 'valores antes']);

  //Nueva data para el form
  const [newTest, setNewTest] = useState({});

  const handleInputTest = (e) => {
    setNewTest({ ...newTest, [e.target.name]: e.target.value });
    console.log(newTest);
  };

  const changeState = () => {
    if (showInput == 'true') setShowInput('false');
    if (showInput == 'false') setShowInput('true');
  };

  useEffect(() => {
    dispatch(getEditTest(skillId));
    setNewTest(test);
  }, [dispatch]);

  //manejo del radio button para la respuesta correcta y las incorrectas, sin terminar, se puede borrar porque no funciona
  const handleChangeRadio = (e) => {
    let correct = [e.target.value.split(',')][0][0] == 'false' ? false : true;
    let answerId = Number([e.target.value.split(',')][0][1]);
    console.log(correct, answerId, 'consola');
    if (correct == true) {
      setOnClickTrue(false);
      setOnClickTrueIndex(answerId);
    }
    if (correct == false) {
      setOnClickTrue(true);
      setOnClickTrueIndex(answerId);
    }
    console.log([OnClickTrue, OnClickTrueIndex, 'valore después']);
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
            />
            <Link to={`/admin/skill/create/question/${test?.id}`}>
              <ButtonEdit value="Agregar Pregunta" color="blue" width="150px" />
            </Link>
          </div>
          <div className={styles2.container}>
            {' '}
            <label>
              Título: <h1>{title}</h1>
            </label>
          </div>

          <div className={`${styles2.container} `}>
            <label>
              Descripción:{' '}
              {showInput == 'true' ? (
                <h3>{description}</h3>
              ) : (
                <input
                  placeholder={description}
                  defaultValue={description}
                  key={skillId}
                  name="description"
                  onChange={handleInputTest}
                ></input>
              )}
            </label>
          </div>

          <div className={styles2.container}>
            <label>
              Tiempo:{' '}
              {showInput == 'true' ? (
                <h3>{time}</h3>
              ) : (
                <input
                  placeholder={time}
                  key={skillId}
                  defaultValue={time}
                  name="timeToComplete"
                  onChange={handleInputTest}
                ></input>
              )}
            </label>
          </div>

          <div className={styles2.container}>
            <label>
              Cantidad de Preguntas:{' '}
              {showInput == 'true' ? (
                <h3>{qtyQuestions}</h3>
              ) : (
                <input
                  placeholder={qtyQuestions}
                  key={skillId}
                  defaultValue={qtyQuestions}
                  name="qtyQuestions"
                  onChange={handleInputTest}
                ></input>
              )}
            </label>
          </div>

          <div className={styles2.container}>
            <label>
              Cantidad de Respuestas:{' '}
              {showInput == 'true' ? (
                <h3>{qtyAnswers}</h3>
              ) : (
                <>
                  <input
                    placeholder={qtyAnswers}
                    key={skillId}
                    defaultValue={qtyAnswers}
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

          <br />
          <div className={styles2.container}>
            <h3>PREGUNTAS:</h3>
          </div>

          <div className={styles2.container}>
            <div>
              <h3>
                {questions?.map((question) => {
                  return (
                    <div key={question.id}>
                      <label>
                        Pregunta:
                        {showInput == 'true' ? (
                          <h4>{question.question}</h4>
                        ) : (
                          <div>
                            <input
                              placeholder={question.question}
                              name="question"
                              defaultValue={question.question}
                              onChange={handleInputTest}
                            ></input>
                            <ButtonEdit
                              color="blue"
                              value="Guardar Pregunta"
                              width="150px"
                            />
                          </div>
                        )}
                      </label>
                      <br />{' '}
                      <label>
                        Respuestas:
                        <div>
                          {question.answers?.map((answer) => (
                            <div key={answer.id}>
                              {showInput == 'true' ? (
                                <p>{answer.id} </p>
                              ) : (
                                <input
                                  placeholder={answer.answer}
                                  key={answer.id}
                                  onChange={handleInputTest}
                                  name="answer"
                                  defaultValue={answer.answer}
                                ></input>
                              )}
                              {OnClickTrue}
                              {showInput == 'true' ? null : (
                                <span>
                                  <div className={styles.body}>
                                    <label className={styles.radioBtn}>
                                      <input
                                        required
                                        type="radio"
                                        name={answer.questionId}
                                        value={[answer.correct, answer.id]}
                                        onClick={handleChangeRadio}
                                      />
                                      <span className={styles.checkmark}></span>
                                      <p>
                                        {answer.correct == true
                                          ? 'correcta'
                                          : 'incorrecta'}
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
      </form>
    </div>
  );
};

export default EditTestView;
