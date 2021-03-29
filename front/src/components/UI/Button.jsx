import React from 'react';
import styles from '../../styles/SendButton.module.css';

const Button = ({type='button', value='Value', onClick=((e)=> console.log(e)), disabled=false}) => {
    return (
        <div>
            <input 
            className={styles.input}
            type={`${type}`}
            value={`${value}`}
            onClick={onClick}
            disabled={disabled}/>
        </div>
    );
};

export default Button;