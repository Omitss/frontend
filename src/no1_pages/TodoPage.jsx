import React, { useState } from 'react'
import TodoTemplate from '../no2_components/todo/TodoTemplate'
import TodoInsert from '../no2_components/todo/TodoInsert'
import TodoList from '../no2_components/todo/TodoList'


const initialState = {
  todoList : [
    {id : 1, subject : "HTML 공부", checked : false},
    {id : 2, subject : "CSS 공부", checked : false},
    {id : 3, subject : "React 공부", checked : true},
    {id : 4, subject : "Python 공부", checked : true},
  ],
  todoObj : {id : "", subject : " ", checked : false}
}

const TodoPage = () => {
  const [state, setState] = useState(initialState);
  const {todoList, todoObj} = state;

  return (
    <TodoTemplate>
      <TodoInsert setState = {setState} todoObj = {todoObj}/>
      <TodoList todoList = {todoList} setState = {setState}/>
    </TodoTemplate>
  )
}

export default TodoPage
