import React from 'react';
import styles from '../../styles/button.module.css';

const Button = ({marginLeft='marginLeft', marginTop='marginTop',color='color', type='button', value='Value', height='height', width='width', onClick, disabled}) => {
    return (
        <div>
            <input 
            className={styles.input}
            type={`${type}`}
            value={`${value}`}
            onClick={(e) => {if(onClick) onClick(e)} }
            disabled={disabled} 
            style={{backgroundColor: disabled ? 'grey' : `${color}`, border: `${color}`, marginLeft: `${marginLeft}`, marginTop: `${marginTop}`, height: `${height}`, width: `${width}`}}/>
        </div>
    );
};

export default Button;