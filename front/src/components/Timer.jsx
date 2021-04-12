import React, { useEffect } from 'react';
import { format } from '../utils/format';


const Timer = ({ time, setTime, handleSubmit }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((timer) => timer - 100);
    }, 1000);

    if (time == 0) handleSubmit();

    return () => {
      clearTimeout(timer);
    }
  }, [time]);


  return (
    <div>
      <div className="clock">
        <p>{format(time)}</p>
      </div>
    </div>
  );
};

export default Timer;
