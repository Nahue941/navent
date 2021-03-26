import React from 'react';
import styles from "../../styles/button.module.css"

const Button = () => {
    return (
        <div className={styles.div}>
            <label className={styles.radiobtn}>
                <input type="radio" name="answer" checked />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.radiobtn}>
                <input type="radio" name="answer" checked/>
                <span className={styles.checkmark}></span>
            </label>
        </div>
    );
};

export default Button;