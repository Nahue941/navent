import React from 'react';
import styles from '../styles/profile.module.scss'
import {format} from '../utils/format'

const ProfileResults = ({promedio, qty, date, timePromedy, min, max}) => {

    return (
        <div className={styles.miniContainer}>
            <h1> Perfil</h1>

            <br/>
            <h2>Cantidad de Test realizados: {qty}</h2>

            <h2>Promedio de resultados: {promedio}%</h2>

            <h2>Ultima fecha que realizó un test: {date}</h2>

            <h2>Tiempo mínimo: {format(min)}</h2>

            <h2>Tiempo máximo: {format(max)}</h2>

            <h2>Tiempo promedio: {format(timePromedy)}</h2>
        </div>
    );
};

export default ProfileResults;