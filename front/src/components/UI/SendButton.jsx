import React from 'react';
import styles from '../../styles/SendButton.module.css';

const SendButton = ({text}) => {
    return (
        <div>
            <input className={styles.inputbtn} type="submit" value={text} />
        </div>
    );
};

export default SendButton;