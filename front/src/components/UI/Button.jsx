import React from 'react';
import styles from '../../styles/radioButton.module.css'

const Button = (props) => {
    //Me esta dando problemas las props que se pasan a los componentes. No estan funcionando como deberian 
    const propsAux = props;
    const answer = propsAux.answer;

    return (
        <>
        <div className={styles.body} key={answer.id}>
            <label className={styles.radioBtn}>
                <input type="radio" name="sample" />
                <span className={styles.checkmark}>
                </span>
                <p>{answer.answer}</p>
            </label>
        </div>
        </>
    );
};

export default Button;

{/* <div className={styles.div}>
    <label className={styles.radiobtn}>
        <input type="radio" name="answer" checked />
        <span className={styles.checkmark}></span>
    </label>
    <label className={styles.radiobtn}>
        <input type="radio" name="answer" checked/>
        <span className={styles.checkmark}></span>
    </label>
</div> */}