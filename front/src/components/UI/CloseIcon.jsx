import React from "react"
import styles from '../../styles/modal.module.scss';

import close from "../../assets/Close.png"

const CloseIcon = () => {
    return(
        <>
<img src={close} className={`${styles.icon} ${styles.closeIcon} ${styles.cursor}`}></img>
        </>
    )
}
export default CloseIcon