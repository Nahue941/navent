import React from 'react';
import styles from '../../styles/loadingSpinner.module.scss';

const LoadingSpinner = () => {
    return (
        <div>
            <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadingSpinner;
