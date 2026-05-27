import React from 'react'
import styled from 'styled-components'

const TodoInsert = ({todoObj, setState}) => {

    const handleChange = (e) => {
        const {name, value} = e.target;

        setState(prev => ({
            ...prev,
            todoObj : {
                ...prev.todoObj,
                [name] : value
            }
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setState(prev => ({
            ...prev,
            todoList : [
                ...prev.todoList,
                {
                    ...prev.todoObj,
                    id :
                        prev.todoList.length > 0
                            ? Math.max(...prev.todoList.map(item => item.id)) + 1
                            : 1
                }
            ],
            todoObj : {
                id : "",
                subject : "",
                checked : false
            }
        }))
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