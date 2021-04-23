import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import { addAdminAnswer, actualIndexQuestion } from '../state/test/actions';
import { useLocation } from 'react-router-dom';

const CreateAnswer = ({ testId, questionId }) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const actualIndexQ = location.state.actualIndexQ;
  const [newAnswer, setNewAnswer] = useState({});

  const handleSubmit = () => {
    setNewAnswer(newAnswer.questionId=questionId);
    dispatch(actualIndexQuestion(actualIndexQ));
    dispatch(addAdminAnswer(testId, newAnswer)).then(() => {
      history.goBack();
    });
  };

  const handleInputChange = (e) => {
    setNewAnswer({ ...newAnswer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1></h1>
      <h3>Ingrese la nueva respuesta:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="answer"
          id="answer"
          autoFocus
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="#answerValue">Valor de la respuesta:</label>
        <br />
        <input
          type="text"
          name="correct"
          id="answerValue"
          autoFocus
          onChange={handleInputChange}
          placeholder={'ex. True o False'}
        />
      </form>
      <Button
        type="submit"
        color="blue"
        value="Agregar"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default CreateAnswer;
