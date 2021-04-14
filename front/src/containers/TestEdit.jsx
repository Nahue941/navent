import React, { useEffect } from 'react';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//

const TestEdit = ({ skillId }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(editTest(skillId))
    }, [dispatch])

  return (
    <div>

    </div>
  );
};

export default Test;