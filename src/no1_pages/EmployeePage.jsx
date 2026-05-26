//EmployeePage.jsx
import React, { useEffect, useReducer, useState } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'


const initialEmps = [
  {id:"1", name:"John", email:"John@example.com", job : "forentdend", pay : 600},
  {id:"2", name:"peter", email:"peter@example.com", job : "backend", pay : 600},
  {id:"3", name:"Susan", email:"Susan@example.com", job : "db", pay : 600},
  {id:"4", name:"Sue", email:"Sue@example.com", job : "ai", pay : 600},
]

const initialEmp = {
  id : '', name : '', email:'', job: "", pay :""
}

const initialState = {
  empTable : initialEmps,
  emp : initialEmp,
  mode : "",
  selectedID : ""
}


const reducer = (state, action) => {
  switch(action.type){
    case "select" : 
      return {
        ...state,
        selectedID : action.payload
      }
    case "set_emp" :
      return {
        ...state,
        emp : action.payload
      }
    case "register" :
      return {
        ...state, 
        empTable : [
          ...state.empTable,
          {
            ...action.payload.emp,
            id : action.payload.newId
          }
        ]
      }
    case "update" :
      return {
        ...state,
        empTable : state.empTable.map( item =>
          item.id === state.selectedID ?
          action.payload : item
        )
      }
    case "delete":
      return {
        ...state,
        empTable : state.empTable.filter(item => 
          item.id !== state.selectedID
        )
      }
    case "mode":
      return{
        ...state,
        mode : action.payload
      }
    default :
      return state;
  }
}

const EmployeePage = () => {
  const[state, dispatch] = useReducer(reducer, initialState)

  const {empTable, emp, selectedID, mode} = state;

 useEffect(() => {
  selectedID && 

  dispatch({type : "set_emp", payload : empTable.filter(item => item.id === selectedID)[0]}) 
  
  
  //dispatch가 setState()함수를 대체하는거임
  // setState(prev => ({
  //   ...prev,
  //   emp: empTable.find(item => item.id === selectedID)
  // }))
}, [selectedID, empTable]) // [selectdID]가 변할때 useEffect를 실행해라
 
const handleDelete = () => {
  if(!selectedID){
    alert("삭제할 데이터를 선택하시오")
    return;
  }

  dispatch({type : "delete"})
  // setState(prev => (
  //   {
  //     ...prev, 
  //     empTable : prev.empTable.filter(item => item.id !== selectedID),
  //     emp : initialEmp,
  //     selectedID : ""
  //   }
  // ))
}

  return (
    <div>
      {console.log(state.empTable)}
      <EmployeeList state = {state} dispatch = {dispatch}/>
      <EmployeeTable state = {state}/>

      <div>
        <button onClick={()=>dispatch({type : "mode", payload : "register"})}>등록</button>
        <button onClick={()=>dispatch({type : "mode", payload : "update"})}>수정</button>
        <button onClick={()=>dispatch({type : "mode", payload : "delete"})}>삭제</button>
      </div>
      {
        mode === "register" ?
        <EmployeeRegister dispatch={dispatch}/>
        : mode === "update" ?
        <EmployeeUpdate emp = {emp} dispatch={dispatch}/>
        : <button onClick={handleDelete}>위 데이터를 삭제 하시겠습니까? </button>

      }
    </div>
  )
}

export default EmployeePage
