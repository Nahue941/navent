import React, { useEffect } from 'react';
import Button from '../components/UI/Button';
import ButtonEdit from '../components/UI/ButtonEdit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalEdit from '../components/UI/ModalEdit';
import { getEditTest } from '../state/test/actions';
import Skill from '../components/Skill';
const EditTestView = ({ skill, jijo }) => {
    
    const dispatch = useDispatch();
    const tests = useSelector((state) => state.test.editTest);
    const title = tests.name
    const questions = tests.questions// es un array de las preguntas, renderizo con un map
    const description = tests.description

    console.log(title, "soy name")
    console.log(tests, "soy tests")
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
        <div><h3>Question 1</h3>        <Button color="blue" value="edit"/> <Button color="blue" value="delete" /></div>
        <h5>Answer 1</h5> <Button color="red" value="edit" height="30px" width="30px"/>
        <h5>Answer 2</h5> <ButtonEdit  color="blue" value="edit"/>
        <h5>Answer 3</h5> <Button color="blue" value="edit" />
        <div><h3>Question 2</h3>        <Button color="blue" value="edit" /></div>
        <div><h3>Question 3</h3>        <Button color="blue" value="edit" /></div>
        <div><h3>Question 4</h3>        <Button color="blue" value="edit" /></div>
        
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