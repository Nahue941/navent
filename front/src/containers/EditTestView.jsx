import React, { useEffect, useState } from 'react';
import ButtonEdit from '../components/UI/ButtonEdit';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEditTest, actualIndexQuestion } from '../state/test/actions';
import styles2 from '../styles/editTestView.module.scss';
import EditTestDescription from './EditTestDescription';
import QuestionAdminView from '../components/QuestionAdminView';


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

  //   const handleChangeTime = (e) => {
  //     console.log(e.target.value, 'soy time');
  //   };
  //   const handleChangeQuestion = (e) => {
  //     console.log(e.target.value, 'soy question');
  //   };
  //   const handleChangeAnswer = (e) => {
  //     console.log(e.target.value, 'soy answer');
  //   };
  //para cambiar la descripcion
  const handleInputTest = (e) => {
    setNewTest({ ...newTest, [e.target.name]: e.target.value });
  };

  const changeState = () => {
    if (showInput == 'true') setShowInput('false');
    if (showInput == 'false') setShowInput('true');
  };

  useEffect(() => {
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
      </div>
      <div>
       

        <div className={styles2.container}>
          <Link to={`/admin/skill/create/question/${test?.id}`}>
            <ButtonEdit value="Agregar Pregunta" color="blue" width="150px" />
          </Link>
        </div>

            <h3>PREGUNTAS:</h3>
        <div className={styles2.container}>
         
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