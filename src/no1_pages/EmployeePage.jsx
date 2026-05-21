//EmployeePage.jsx
import React, { useState } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'


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
  selectdID : ""
}


const EmployeePage = () => {
  const [state, setState] = useState(initialState);
  // const [empTable, setEmpTable] = useState(initialEmps);
  // const [emp, setEmp] = useState(initialEmp);
  // const [mode, setMode] = useState("register");
  // const [selectdID] = useState("")
  // 저 한문장으로 initialState 선언으로 한줄로 축약 시킬 수 있음

  return (
    <div>
      <EmployeeList state = {state} setState = {setState}/>
    </div>
  )
}

export default EmployeePage
