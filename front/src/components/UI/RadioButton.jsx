import React from 'react';
import styles from '../../styles/radioButton.module.css'

const RaddioButton = ({ answer, questionId, onClick }) => {

    return (
        <div className={styles.body} key={answer.id}>
            <label className={styles.radioBtn}>
                <input
                    required
                    type="radio"
                    name={questionId}
                    onClick={(e) => {
                        if(onClick) onClick(e, answer);
                    }} />
                <span className={styles.checkmark}>
                </span>
                <p>{answer.answer}</p>
            </label>
        </div>
    );
};

export default RaddioButton;