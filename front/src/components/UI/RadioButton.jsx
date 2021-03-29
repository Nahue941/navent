import React from 'react';
import styles from '../../styles/radioButton.module.css'

const RaddioButton = ({answer, questionId}) => {

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

export default RaddioButton;