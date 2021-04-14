import React, { useEffect } from 'react';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalEdit from '../components/UI/ModalEdit';
const EditTestView = ({ skillId }) => {

    

  return (
    <div>

        <div>
        <h1>Edit Test</h1>
        <h3>Title</h3>
        <h3>Description</h3>
        <h3>Answer</h3>
        <h3>Answer</h3>
        <h3>Answer</h3>
        <h3>Answer</h3>

        </div>

        <div>
        <Link to="/admin/skill" >
        <Button color="blue" value="save" />
        </Link>
        </div>

        <div>
        <Link to="/admin/skill">
        <Button color="blue" value="cancel" />
        </Link>
        </div>

    </div>
  );
};

export default EditTestView;