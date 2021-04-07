import React from 'react';
import styles from '../../styles/button.module.css';

const Button = ({marginLeft='marginLeft', marginTop='marginTop',color='color', type='button', value='Value', onClick, disabled=false}) => {
    return (
        <div>
            <input 
            className={styles.input}
            type={`${type}`}
            value={`${value}`}
            onClick={(e) => {if(onClick) onClick(e)} }
            disabled={disabled}
            style={{backgroundColor: `${color}`, border: `${color}`, marginLeft: `${marginLeft}`, marginTop: `${marginTop}`}}/>
        </div>
    );
};

export default Button;