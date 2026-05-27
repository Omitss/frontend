// TodoList.jsx
import React from 'react'
import TodoListChild from './TodoListChild'


const TodoList = ({todoList, setState}) => {
  return (
    <div>
        {todoList?.map(item => (
            <TodoListChild
                setState = {setState}
                key = {item.id}
                item = {item}
            />
        ))}
    </div>
  )
}

export default TodoList
