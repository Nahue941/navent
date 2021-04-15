import React, { useEffect ,useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';

import { allTests } from '../state/questions/actions';
import { clear } from '../state/user/actions';
import { timeLogger, totalTimeReset } from '../state/time/actions';
import { resetQuestions } from '../state/questions/actions';
import { resetAnswers } from '../state/answers/actions';
import ModalContainer from './ModalContainer';
import Background from '../components/UI/Background';
import styles from '../styles/skillsView.module.scss';


const allTestsContainer = () => {
  const [modal, setModal] = useState(false);
  const results = useSelector((state) => state.user.results);
  
  const getModal = (value) => {
    setModal(value);
  };  
  

  const dispatch = useDispatch();
  const tests = useSelector((state) => state.question.tests);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(clear())
    dispatch(resetAnswers())
    dispatch(resetQuestions())
    dispatch(allTests(user.id));
    dispatch(timeLogger(1000));
    dispatch(totalTimeReset());
  }
 , [dispatch]);


  return (
    <>
      <Background />
      <div className={styles.main}>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.container}>
          <ModalContainer />
        </div>
      </div>
    </>
  );
};

export default allTestsContainer;
