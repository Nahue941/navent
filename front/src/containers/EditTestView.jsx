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
  const [OnClickTrue, setOnClickTrue] = useState(null);
  const [OnClickTrueIndex, setOnClickTrueIndex] = useState(Number());

    console.log([OnClickTrue, OnClickTrueIndex, "valores antes" ])



      //Nueva data para el form
    const [newTest, setNewTest] = useState({}); 
      const [newTitle, setNewTitle] = useState([]);
      const [newDescription, setNewDescription] = useState(null);
      const [newTime, setNewTime] = useState(null);
      const [newQuestion, setNewQuestion] = useState(null);
      const [newAnswer, setNewAnswer] = useState(null);
        const newValues = {
            
            
            
        };
        console.log(newTitle);



    const handleChangeTitle =  (e) => {
        
        setNewQuestion(e.target.value)
        console.log(newTitle,"soy title")
    }

    console.log(newTitle,"soy title2222222222")
    const handleChangeDescription = (e) => {console.log(e.target.value,"soy description")}
    const handleChangeTime = (e) => {console.log(e.target.value,"soy time")}
    const handleChangeQuestion = (e) => {console.log(e.target.value,"soy question")}
    const handleChangeAnswer = (e) => {console.log(e.target.value,"soy answer")}
    const handleInputTest = (e) => {
        setNewTest({...newTest, [e.target.name]: e.target.value})
        console.log(newTest)
    }

  const changeState = () => {
    if (showInput == 'true') setShowInput('false');
    if (showInput == 'false') setShowInput('true');
  };
  console.log(showInput);



  useEffect(() => {
    dispatch(getEditTest(skillId));
    setNewTest(test)
  }, [dispatch]);

  const handleChangeRadio = (e) => {
    let correct = [e.target.value.split(",")][0][0]=='false'? false : true
    let answerId = Number([e.target.value.split(",")][0][1])
    console.log(correct, answerId, "consola")
    if (correct==true) {
        setOnClickTrue(false)
        setOnClickTrueIndex(answerId)
    }
    if (correct==false) {
        setOnClickTrue(true)
        setOnClickTrueIndex(answerId)
    }
    console.log([OnClickTrue, OnClickTrueIndex, "valore después" ])
  }

  const handleClick = () => {
    if (showInput == 'true') setShowInput('false');
    if (showInput == 'false') setShowInput('true');
  };

  const handleInput = () => {};

  //cuando hago click en guardar que haga un put de los nuevos valores al back

  const handleForm = () => {
    dispatch(getEditTest(newValues));
  };

//   const handleRadioChange = (e) => {
//     setNewQuestion({
//       ...newQuestion,
//       [e.target.name]: e.target.value === 'true',
//     });
//     console.log(newQuestion);
//   };

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
           <ButtonEdit color="blue" width="80px" value={showInput=='true'? "editar" : "cancelar"} />
        </div>
        <div>
          {' '}
          <label>
            Título:{' '}
            {showInput == 'true' ? (
              <h3>{title}</h3>
            ) : (
              <input key={skillId} placeholder={newTest?.title} defaultValue={newTest?.title} name="name" onChange={handleInputTest}></input>
            )}{' '}
          </label>
        </div>
        <label>
          Descripción:{' '}
          {showInput == 'true' ? (
            <h3>{description}</h3>
          ) : (
            <input placeholder={description} key={skillId} onChange={handleChangeDescription}></input>
          )}
        </label>
        <br />
        <label>
          Tiempo:{' '}
          {showInput == 'true' ? (
            <h3>{time}</h3>
          ) : (
            <input placeholder={time} key={skillId} onChange={handleChangeTime}></input>
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
                        <input placeholder={question.question} onChange={handleChangeQuestion}></input>
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
                              onChange={handleChangeAnswer}
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
                                  <p>{answer.correct==true ? "correcta" : "incorrecta"}</p>
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
