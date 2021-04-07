import React from 'react';
import styles from '../../styles/button.module.css';

const Button = ({type='button', value='Value', onClick, disabled=false}) => {
    return (
        <div>
            <input 
            className={styles.input}
            type={`${type}`}
            value={`${value}`}
            onClick={(e) => {if(onClick) onClick(e)} }
            disabled={disabled}/>
        </div>
    );
};

export default Button;