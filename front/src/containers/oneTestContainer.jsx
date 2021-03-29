import React, { useEffect , useState} from 'react';
import Question from '../components/question';
import styles from '../styles/oneTestContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { allQuestions } from '../state/questions/actions';
import SendButton from '../components/UI/SendButton'


const TestContainer = (props) => {
  //Me esta dando problemas las props que se pasan a los componentes. No estan funcionando como deberian 
  const auxProps = props;
  const {id} = auxProps;
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.all);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    dispatch(allQuestions(id));
  }, [dispatch]);

  const handleAnswerButtonClick = (e) => {
    e.preventDefault()
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else {
      alert("¡Terminaste el test!")
    }
  }

  return(
    <div className={styles.container}>
      {questions && (
        <form onSubmit={handleAnswerButtonClick}>
        <Question 
        question={questions[currentQuestion]} 
        />
      <br /><br />      
      <SendButton />
      </form>
      )}
    </div>
  )
};

export default TestContainer;
