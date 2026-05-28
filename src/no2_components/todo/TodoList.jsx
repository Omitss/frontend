// TodoList.jsx

import React, { useContext } from 'react'
import TodoListChild from './TodoListChild'
import styled from 'styled-components'
import { TodoContext } from '../../no0_context/TodoContext'

const TodoList = () => {
  const {state} = useContext(TodoContext);
  const {todoList} = state;
  return (
    <Container>
      {
        todoList?.map(item => (
          <TodoListChild
            key={item.id}
            item={item}
          />
        ))
      }
    </Container>
  )
}

export default TodoList

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;
`