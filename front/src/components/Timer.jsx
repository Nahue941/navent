import React, { useEffect } from 'react';
import { format } from '../utils/format';
import { allQuestions, setDisabled, setIndexQuestion, resetQuestions } from '../state/questions/actions';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

const Timer = ({ time, setTime, countCorrectAnswers }) => {
  const history = useHistory();
  const indexQuestion = useSelector((state) => state.question.indexQuestion);
  const questions = useSelector((state) => state.question.all);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((timer) => timer - 100);
    }, 1000);

    if (time == 0) {
      const nextQuestion = indexQuestion + 1;
      if (nextQuestion < questions.length) {
        dispatch(setIndexQuestion(nextQuestion));
        dispatch(setDisabled(true));
        setTime(1000)
      }
      else {
        setTime(0)
        alert(`Respuestas correctas: ${countCorrectAnswers()}/${questions.length}`);
        history.push('/results');
      }
    }

    return () => {
      clearTimeout(timer)
    }
  }, [time]);

  return (
    <div>
      <div className="clock">
        <p>{format(time)}</p>
      </div>
    </div>
  );
};

export default Timer;
