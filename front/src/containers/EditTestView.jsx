import React, { useEffect } from 'react';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalEdit from '../components/UI/ModalEdit';
import { getEditTest } from '../state/test/actions';
import Skill from '../components/Skill';
const EditTestView = ({ skill, jijo }) => {
    
    const dispatch = useDispatch();

    console.log(getEditTest(jijo),  "soy edit test desde edittestview")
    useEffect(() => {
        dispatch(getEditTest(jijo));
    }, [dispatch]);

    // {skills?.map((skill) => (
    //     <Skill key={skill.id} skill={skill} />
    //   ))}
    return (
    <div>


        <div>
        <div><h1>Edit Test</h1></div>
        <div><h3>Title</h3>        <Button color="blue" value="edit" /></div>
        <div><h3>Description</h3>        <Button color="blue" value="edit" /></div>
        <div><h3>Answer</h3>        <Button color="blue" value="edit" /> <Button color="blue" value="delete" /></div>
        <div><h3>Answer</h3>        <Button color="blue" value="edit" /></div>
        <div><h3>Answer</h3>        <Button color="blue" value="edit" /></div>
        <div><h3>Answer</h3>        <Button color="blue" value="edit" /></div>
        render={({match}) => <p>{match.params.skillId}</p> }
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