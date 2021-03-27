import React from 'react';
import styles from '../../styles/radioButton.module.css'

const Button = (props) => {
    //Me esta dando problemas las props que se pasan a los componentes. No estan funcionando como deberian 
    const propsAux = props;
    const {answer, questionId} = propsAux;

    return (
        <>
        <div className={styles.body} key={answer.id}>
            <label className={styles.radioBtn}>
                <input type="radio" name={questionId} />
                <span className={styles.checkmark}>
                </span>
                <p>{answer.answer}</p>
            </label>
        </div>
        </>
    );
};

export default Button;