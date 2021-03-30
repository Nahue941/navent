import React from "react"
import styles from '../../styles/modal.module.scss';

const CloseIcon = () => {
    return(
        <>
<img src="http://localhost:3000/Close.png" className={`${styles.icon} ${styles.closeIcon} ${styles.cursor}`}></img>
        </>
    )
}
export default CloseIcon