import React from 'react';
import Button from '../components/UI/Button';
import { useDispatch, useSelector } from 'react-redux';

import { toggleActiveTest } from '../state/test/actions';

const ActiveTogglerTest = ({testId}) => {
  const dispatch = useDispatch();

  const active = !!useSelector((state) => state.test.editTest.active);
  const skillId = useSelector(state => state.test.editTest.skillId)

  const handlerActive = () => {
      console.log(active);
    dispatch(toggleActiveTest({testId, active}))
  };

  return (
    <Button
      type="submit"
      color="blue"
      value={active ? 'Desactivar Test' : 'Activar Test'}
      onClick={handlerActive}
    />
  );
};

export default ActiveTogglerTest;
