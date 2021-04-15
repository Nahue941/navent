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
    const description = tests.description
    const questions = tests.questions// es un array de las preguntas, renderizo con un map
    const answers = questions.map((x,i, a) => x.answers[i]?.answer)
    console.log(tests, "soy tests")
    console.log(questions?.map(x=> x), "soy questions")
    console.log(questions.map((x,i, a) => x.answers[i]?.answer), "soy answers")
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
        <div><h3>{title}</h3>        <ButtonEdit  color="blue" value="edit" /></div>
        <div><h3>{description}</h3>        <ButtonEdit  color="blue" value="edit" /></div>
        <div><h3>{questions?.map(x=> <div key="1">{x.question}</div> )}</h3>
        <div>{answers?.map(x=> <div key="2">{x}</div> )}</div>
        <ButtonEdit color="blue" value="edit"/>
        </div>
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