import React, {useEffect} from 'react';
import Question from "../components/question"
import styles from "../styles/oneTestContainer.module.css"
import {useDispatch, useSelector} from "react-redux"
import {allQuestions} from "../state/questions/actions"

const TestContainer = (id) => {
  const dispatch = useDispatch()
console.log(id.id);
  const questions = useSelector((state)=>state.question.all)

  useEffect(()=>{
    dispatch(allQuestions(id.id))
  }, [dispatch])

  console.log(questions);


  return (
    <div className={styles.container}>
      <form>
      {questions && questions.map((question)=> <Question key={question.id} question={question.question} answers={question.answers}/>)}
      <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export default TestContainer;
