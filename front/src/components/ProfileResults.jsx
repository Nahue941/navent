import React from 'react';
import styles from '../styles/profile.module.scss'

const ProfileResults = ({promedio, qty, date, timePromedy, min, max}) => {

    return (
        <div className={styles.miniContainer}>
            <h1>Perfil</h1>
            <br/>
            <h2>Cantidad de Test realizados: {qty}</h2>
            <br/>
            <h2>Promedio de resultados: {promedio}%</h2>
            <br/>
            <h2>Ultima fecha que realizó un test: {date}</h2>
            <br/>
            <h2>Tiempo mínimo: {min/100} minutos</h2>
            <br/>
            <h2>Tiempo máximo: {max/100} minutos</h2>
            <br/>
            <h2>Tiempo promedio: {timePromedy/100} minutos</h2>
        </div>
    );
};

export default ProfileResults;