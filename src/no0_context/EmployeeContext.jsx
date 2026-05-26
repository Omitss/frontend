// EmployeeContext.jsx
import React, { createContext, useReducer } from 'react'

export const EmployeeContext = createContext();

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



const EmployeeProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EmployeeContext.Provider value={{state, dispatch}}>
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider
