import React, { useEffect, useState } from 'react';
import Button from '../components/UI/Button';
import ButtonEdit from '../components/UI/ButtonEdit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalEdit from '../components/UI/ModalEdit';
import { getEditTest, setEditTest } from '../state/test/actions';
const EditTestView = ({ skill, skillId }) => {

    const dispatch = useDispatch();
    const tests = useSelector((state) => state.test.editTest);
    const title = tests?.name
    const description = tests?.description
    const questions = tests?.questions// es un array de las preguntas, renderizo con un map
    const [showInput, setShowInput] = useState('true')
    
    
    const changeState = (() => {
        if(showInput=='true') setShowInput('false')
        if(showInput=='false') setShowInput('true')
    })
    console.log(showInput)
    
    //Nueva data para el form
    const newValues = {
        title: title,
        description: description,
        questions: questions
    }
    console.log(newValues)
    
    useEffect(() => {
        dispatch(getEditTest(skillId));
    }, [dispatch]);


const handleClick = (() => {
    if(showInput=='true') setShowInput('false')
        if(showInput=='false') setShowInput('true')
})

const handleInput = (() => {

})

//cuando hago click en guardar que haga un put de los nuevos valores al back

const handleForm = (() => {
    dispatch(getEditTest(newValues));
})

    // {skills?.map((skill) => (
    //     <Skill key={skill.id} skill={skill} />
    //   ))}
    // {showInput=='true'? <h3>show</h3>: <input placeholder="not show" key="1" ></input>}
    return (
        <div>
            <div>
                <div><h1>Editar Test</h1></div>
                <div  onClick={() => changeState()}><ButtonEdit color="blue" value="editar" /></div>
                <div > <label>Título: {showInput=='true'? <h3>{title}</h3>:<input placeholder={title} key={skillId}></input>} </label></div>
                {showInput=='true'? <h3>{description}</h3>: <input placeholder={description} key="1" ></input>}
                <div ><h3>{questions?.map(x => {
                    return (
                        <div key={x.id}>
                            {<label>Pregunta: <input placeholder={x.question }></input></label>}
                          <br/>  <label>Respuestas:<div>{x.answers?.map(answer => <div key={answer.id} >{showInput=='true'? <h3>{answer.answer}</h3>:<input placeholder={answer.answer} key={answer.id}></input>} </div>)}</div></label>
                            
                            
                        </div>)
                })}</h3>
                </div>
            </div>
            <div onClick={() => handleForm()} >
                <Link to="/admin/skill" >
                    <ButtonEdit color="blue" value="guardar" width="80px" />
                </Link>
            </div>

            <div>
                <Link to="/admin/skill">
                    <ButtonEdit color="blue" value="cancelar" width="80px"/>
                </Link>
            </div>

        </div>
    );
};

export default EditTestView;