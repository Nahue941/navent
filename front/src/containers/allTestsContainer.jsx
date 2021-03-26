import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTests } from '../state/questions/actions';


const allTestsContainer = () => {
  const dispatch = useDispatch();

  const tests = useSelector((state) => state.question.tests);

  useEffect(() => {
    dispatch(allTests());
  }, [dispatch]);

  return (
    <div>
      <h1>Esto es un test de prueba</h1>
      {tests.map((test) => {
        return (
          <div key={test.name}>
            <h2>{test.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default allTestsContainer;
