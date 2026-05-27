import React, { useState } from 'react'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from "react-icons/md"

import styled from 'styled-components'

const TodoListChild = ({item, setState}) => {

    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(item.subject)

    const handleToggle = () => {
        setState(prev => ({
            ...prev,
            todoList : prev.todoList.map(todo =>
                todo.id === item.id
                    ? {...todo, checked : !todo.checked}
                    : todo
            )
        }))
    }

    const handleUpdate = () => {
        setState(prev => ({
            ...prev,
            todoList : prev.todoList.map(todo =>
                todo.id === item.id
                    ? {...todo, subject : value}
                    : todo
            )
        }))

        setEditing(false)
    }

    const handleDelete = () => {
        setState(prev => ({
            ...prev,
            todoList : prev.todoList.filter(todo =>
                todo.id !== item.id
            )
        }))
    }

    return (
        <ItemBox>

            <CheckBox onClick={handleToggle}>
                {
                    item.checked
                        ? <MdCheckBox/>
                        : <MdCheckBoxOutlineBlank/>
                }
            </CheckBox>

            <Content>
                {
                    editing
                    ?
                    <EditInput
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        onBlur={handleUpdate}
                        onKeyDown={(e)=>{
                            if(e.key==="Enter"){
                                handleUpdate();
                            }
                        }}
                        autoFocus
                    />
                    :
                    <Checked
                        $checked={item.checked}
                        onDoubleClick={()=>setEditing(true)}
                    >
                        {item.subject}
                    </Checked>
                }
            </Content>

            <DeleteButton onClick={handleDelete}>
                <MdRemoveCircleOutline/>
            </DeleteButton>

        </ItemBox>
    )
}

export default TodoListChild


const ItemBox = styled.div`
    display: flex;
    align-items: center;
    padding: 14px;
    border-radius: 8px;
    background: #f8f9fa;
`

const CheckBox = styled.div`
    font-size: 24px;
    cursor: pointer;
    color: #7950f2;
`

const Content = styled.div`
    flex: 1;
    margin-left: 12px;
`

const Checked = styled.div`
    font-size: 18px;

    text-decoration: ${({$checked}) =>
        $checked ? "line-through" : "none"};

    color: ${({$checked}) =>
        $checked ? "#adb5bd" : "#212529"};
`

const DeleteButton = styled.div`
    font-size: 24px;
    color: #ff6b6b;
    cursor: pointer;
`

const EditInput = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
`