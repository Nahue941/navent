import React from 'react';
import styles from '../../styles/SendButton.module.css';

const SendButton = () => {
    return (
        <div>
            <input className={styles.input} type="submit" value="Enviar" />
        </div>
    );
};

export default SendButton;