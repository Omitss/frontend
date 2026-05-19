import React, { useState } from 'react'
import EmployeeTable from '../no2_components/employee/EmployeeTable';
import Register from '../no2_components/employee/Register';

const initialState = [
  {id:1, name:"John", email:"John@example.com", job : "forentdend", pay : 600},
  {id:2, name:"peter", email:"peter@example.com", job : "backend", pay : 600},
  {id:3, name:"Susan", email:"Susan@example.com", job : "db", pay : 600},
  {id:4, name:"Sue", email:"Sue@example.com", job : "ai", pay : 600},
]
{/* 데이터를 받는다 -> JS에서는 state관리를 한다
  const [info, setInfo] = useState(초기값)
  */}


const EmployeePage = () => {
  const [infos, setInfo] = useState(initialState); // JS의 첫 기초, 데이터를 불러면 State를 붙여서 관리한다.

  return (
    <div>
      <EmployeeTable infos = {infos}/>
      <Register/>
    </div>
  )
}

export default EmployeePage
