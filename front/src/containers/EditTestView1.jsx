import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import styles from '../styles/radioButton.module.css';
import styles2 from '../styles/editTestView.module.scss';
import QuestionAdminView from '../components/QuestionAdminView';
import Button from '../components/UI/Button';
import ButtonEdit from '../components/UI/ButtonEdit';
import { getEditTest, actualIndexQuestion } from '../state/test/actions';

const EditTestView = ({ skillId }) => {
  const test = useSelector((state) => state.test.editTest);
  const dispatch = useDispatch();
  const title = test?.name;
  const qtyQuestions = test?.qtyQuestions;
  const qtyAnswers = test?.qtyAnswers;
  const description = test?.description;
  const time = test?.timeToComplete;
  const history = useHistory();

  const [showInput, setShowInput] = useState('true');
  const [OnClickTrue, setOnClickTrue] = useState(null);
  const [OnClickTrueIndex, setOnClickTrueIndex] = useState(Number());
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
            <h3>PREGUNTAS:</h3>
            <QuestionAdminView />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTestView