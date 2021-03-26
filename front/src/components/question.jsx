import React from 'react';
import styles from '../styles/oneTestContainer.module.css';


const Question = (question) => {
    console.log(question.answers[0].answer);
    return(
        
            <div>
                <h2>{question.question} </h2>
                <div className={styles.answers}>
                    {question.answers.map((answer)=> (
                    <>
                        <label key={answer.id}> {answer.answer}
                        <input type="radio" name="Pregunta 1"  />
                        </label>
                    </>
                    )) 
                    }
                </div>
            </div>
        
    )
}
export default Question

