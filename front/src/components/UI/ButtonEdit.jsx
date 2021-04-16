import React from 'react';
import styles from '../../styles/button.module.css';

const ButtonEdit = ({marginLeft='marginLeft', marginTop='marginTop',color='color', type='button', value='Value', height='height', width='width', onClick, disabled=false}) => {
    return (
        <div>
            <input 
            className={`${styles.input} ${styles.edit}`}
            type={`${type}`}
            value={`${value}`}
            onClick={(e) => {if(onClick) onClick(e)} }
            disabled={disabled}
            style={{backgroundColor: `${color}`, border: `${color}`, marginLeft: `${marginLeft}`, marginTop: `${marginTop}`, height: `${height}`, width: `${width}`}}/>
        </div>
    );
};

export default ButtonEdit;