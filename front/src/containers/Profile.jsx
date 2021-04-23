import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allResults } from '../state/user/actions';
import ProfileResults from '../components/ProfileResults';
import styles from '../styles/profile.module.scss';
import Background from '../components/UI/Background';
import {FcExpired} from 'react-icons/fc'
import {format} from '../utils/format'

const Profile = ({ userId }) => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.user.allResults)
  const [promedy, setPromedy] = useState(0);
  const [time, setTime] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  let resultados = [];
  let times = [];

  useEffect(() => {
    dispatch(allResults(userId))
    .then((res) => res.payload)
    .then((results) => {
      results.map((result) => {
        resultados.push(result.result)
        times.push(result.time)
      });
      if (resultados.length) {
        let suma = resultados.reduce((a, b) => a + b, 0);
        setPromedy(suma / resultados.length);
        suma = times.reduce((a, b) => a + b, 0);
        setTime(suma / times.length);
        setMax(Math.max(...times));
        setMin(Math.min(...times));
      }
    })
  }, []);


  return (
    <>
      <Background />
      {results?.length ? (
        <div className={styles.container}>
          <ProfileResults
            min={min}
            max={max}
            timePromedy={time}
            date={results[results.length - 1]['date']}
            qty={results.length}
            promedio={Math.round(promedy)}
          />
        </div>
      )
    :
    (
      <div className={styles.container}>
      <div style={{textAlign: 'center', paddingRight: '4%', paddingTop: '5%'}} className={styles.miniContainer}>
        ¡No has realizado ningun Test todavía!
        <br/>
        ¿Qué esperas para validar tus habilidades?
        <br/>
        <FcExpired size={50} />
      </div>
      </div>
    )}
    </>
  );
};

export default Profile;
