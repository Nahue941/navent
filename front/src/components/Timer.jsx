import React, { useEffect } from 'react';
import { format } from '../utils/format';
import { timeLogger, totalTime } from '../state/time/actions';
import { useDispatch, useSelector } from 'react-redux';

const Timer = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const { countDown, total } = useSelector((state) => state.time);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(totalTime(total + 100));
      dispatch(timeLogger(countDown - 100));
    }, 1000);

    if (countDown == 0) {
      handleSubmit();
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [countDown]);

  return (
    <div>
      <div className="clock">
        <p>{format(countDown)}</p>
      </div>
    </div>
  );
};

export default Timer;
