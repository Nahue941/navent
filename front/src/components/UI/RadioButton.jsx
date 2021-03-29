import React from 'react';
import styles from '../../styles/radioButton.module.css'

const RaddioButton = ({ answer, questionId, onClick=((e)=>console.log(e)) }) => {

    return (
        <div className={styles.body} key={answer.id}>
            <label className={styles.radioBtn}>
                <input type="radio" name={questionId} onClick={(e) => onClick(e, answer)}/>
                <span className={styles.checkmark}>
                </span>
                <p>{answer.answer}</p>
            </label>
        </div>
    );
};

export default RaddioButton;