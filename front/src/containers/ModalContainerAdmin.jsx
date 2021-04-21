import React from 'react';
import ModalAdmin from '../components/ModalAdmin';

const ModalContainerAdmin = ({ question, answers, show, onHide, index }) => {
  return (
    <ModalAdmin
      index={index}
      question={question}
      answers={answers}
      show={show}
      onHide={onHide}
    />
  );
};

export default ModalContainerAdmin;
