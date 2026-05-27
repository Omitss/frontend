import React from 'react'
import TodoListChild from './TodoListChild'
import styled from 'styled-components'

const TodoList = ({todoList, setState}) => {
  return (
    <ListBox>
        {todoList?.map(item => (
            <TodoListChild
                setState={setState}
                key={item.id}
                item={item}
            />
        ))}
    </ListBox>
  )
}

export default TodoList


const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`