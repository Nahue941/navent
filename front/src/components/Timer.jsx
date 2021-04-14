import React, { useEffect, useState } from 'react';
import { format } from '../utils/format';
import { timeLogger, totalTime } from '../state/time/actions';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/UI/Modal';

const Timer = ({ handleSubmit, setAnswerIndex }) => {
  const dispatch = useDispatch();
  const { countDown, total } = useSelector((state) => state.time);
  const [modal, setModal] = useState(true);

  const hideModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(totalTime(total + 100));
      dispatch(timeLogger(countDown - 100));
    }, 1000);

    !countDown && clearTimeout(timer);
    return () => {
      clearTimeout(timer);
    };
  }, [countDown]);

  if (!countDown) {
    if (setAnswerIndex) return handleSubmit();
    return (
      <Modal
        show={modal}
        onHide={hideModal}
        handleSubmit={handleSubmit}
        modalType="timeModal"
      />
    );
  }

  return (
    <div>
      <div className="clock">
        <p>{format(countDown)}</p>
      </div>
    </div>
  );
};

export default Timer;
