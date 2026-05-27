import React, { useContext } from 'react'
import styled from 'styled-components'
import { TodoContext } from '../../no0_context/TodoContext'

const TodoInsert = () => {

    const {state, dispatch} = useContext(TodoContext);

    const {todoObj} = state;

    const handleChange = (e) => {

        const {name, value} = e.target;

        dispatch({
            type : "CHANGE",

            payload : {
                name,
                value
            }
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch({
            type : "INSERT"
        })
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Input
                type="text"
                name="subject"
                value={todoObj.subject}
                onChange={handleChange}
                required
                placeholder='할 일을 입력하세요'
            />

            <Button>입력</Button>

        </Form>
    )
}

export default TodoInsert

const Form = styled.form`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`

const Input = styled.input`
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
`

const Button = styled.button`
    border: none;
    background: #7950f2;
    color: white;
    padding: 0 20px;
    border-radius: 8px;
    cursor: pointer;
`   