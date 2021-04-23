import React from 'react';
import styles from '../../styles/radioButton.module.css';

const RaddioButton = ({
  answer,
  questionId,
  onClick,
  selectedId,
  adminEdit,
  isAdmin,
  index,
  oldIndex,
  
}) => {
  return (
    <div className={styles.body} key={answer.id}>
      <label className={`${styles.radioBtn} `}>
        <input
          required
          type="radio"
          name={questionId}
          onClick={(e) => {
            if (onClick && !isAdmin) onClick(e, answer);
            isAdmin && onClick(index, answer.correct, oldIndex, answer);
          }}
        />

        <span
          className={`${styles.checkmark} 
          ${adminEdit && answer.correct && styles.selected}
          ${!adminEdit && selectedId === answer.id && styles.selected}
          `}
        ></span>
        {!adminEdit && <p>{answer.answer}</p>}
      </label>
    </div>
  );
};

export default RaddioButton;
