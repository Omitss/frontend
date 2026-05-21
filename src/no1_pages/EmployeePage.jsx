//EmployeePage.jsx
import React, { useEffect, useState } from 'react'
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


const EmployeePage = () => {
  const [state, setState] = useState(initialState);
  // const [empTable, setEmpTable] = useState(initialEmps);
  // const [emp, setEmp] = useState(initialEmp);
  // const [mode, setMode] = useState("register");
  // const [selectdID] = useState("")
  // 저 한문장으로 initialState 선언으로 한줄로 축약 시킬 수 있음
  const {empTable, selectedID} = state;

 useEffect(() => {
  selectedID && 
  setState(prev => ({
    ...prev,
    emp: empTable.find(item => item.id === selectedID)
  }))
}, [selectedID]) // [selectdID]가 변할때 useEffect를 실행해라
 

  return (
    <div>
      <EmployeeList state = {state} setState = {setState}/>
      <EmployeeTable state = {state}/>

      <div>
        <button>등록</button>
        <button>수정</button>
        <button>삭제</button>
      </div>

      <EmployeeRegister setState={setState}/>
      <EmployeeUpdate />
    </div>
  )
}

export default EmployeePage
