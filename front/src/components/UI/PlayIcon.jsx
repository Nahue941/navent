import React from "react"
import styles from '../../styles/modal.module.scss';

import play from "../../assets/Play.png"

const PlayIcon = () => {
    return(
        <>
<img src={play} className={`${styles.icon} ${styles.cursor}`}></img>
        </>
    )
}
export default PlayIcon