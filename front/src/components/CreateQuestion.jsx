import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createQuestion } from '../state/questions/actions';
import Button from './UI/Button';
import { getEditTest, actualIndexQuestion } from '../state/test/actions';
import { useSelector } from 'react-redux';

const CreateQuestion = ({ testId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState([]);
  const [newRadio, setNewRadio] = useState(0);
  const [answers, setAnswers] = useState(
    useSelector((state) => state.test.all.length),
  );
  useEffect(() => {
    dispatch(getEditTest(testId));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuestion({ testId, newQuestion })).then(() =>
      history.goBack(),
    );
  };

  const handleInputChangeQuestion = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleInputChangeAnswer = (e) => {
    const auxArray = newAnswer;
    auxArray[e.target.id] = { answer: e.target.value, correct: false };
    setNewAnswer(auxArray);
  
    //hacer un map que cons auxarray true, sean false, y los auxarray false  sean true

    // e.target.name=='true'? setNewRadio(true) : setNewRadio(false)
    // setNewRadio({ ...newRadio, [e.target.name]: e.target.value
    // })
    // console.log(newRadio, "checkbox true");
  };

  const handleChangeRadio = (e) => {
    setNewRadio(e.target.id);
  };
  //elimina o agrega inputs de respuestas
  const handleAddAnswers = (e) => {
    console.log(e.target.value);
    if (e.target.value === '+') setAnswers(answers + 1);
    if (e.target.value === '-') setAnswers(answers - 1);
  };
  
  //hace false a todos, y despues hace true al seleccionado con el radio
  const saveAnswer = (e) => {
    const auxArray = newAnswer;
    auxArray.map(x => x.correct = false)
    auxArray[newRadio].correct = true;

    console.log(auxArray, 'save answer');
  };

  return (
    <div>
      <h3>Ingrese la pregunta o consigna:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          id="question"
          autoFocus
          onChange={handleInputChangeQuestion}
        />
      </form>
      <form onSubmit={handleSubmit}>
        <h3>Ingrese las respuestas:</h3>

        <div>
          {[...Array(answers)].map((e, i) => (
            <div key={i + 1}>
              <input
                type="text"
                name={`answer${i + 1}`}
                id={i}
                autoFocus
                onChange={handleInputChangeAnswer}
              />
              <input
                onChange={handleChangeRadio}
                key={i + 1}
                type="radio"
                id={i}
                name="correct"
                value="true"
              ></input>
            </div>
          ))}
        </div>

      </form>
      <Button type="submit" color="blue" value="+" onClick={handleAddAnswers} />
      <Button type="submit" color="blue" value="-" onClick={handleAddAnswers} />
      <Button type="submit" color="blue" value="Guardar" onClick={saveAnswer} />
    </div>
  );
};

export default CreateQuestion;
