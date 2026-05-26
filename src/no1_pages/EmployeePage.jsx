//EmployeePage.jsx
import React, { useContext, useEffect} from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'
import { EmployeeContext } from '../no0_context/EmployeeContext'


const EmployeePage = () => { 
  const {state, dispatch} = useContext(EmployeeContext);
  const {selectedID, empTable, mode} = state;


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
      
      <EmployeeList />
      <EmployeeTable/>

      <div>
        <button onClick={()=>dispatch({type : "mode", payload : "register"})}>등록</button>
        <button onClick={()=>dispatch({type : "mode", payload : "update"})}>수정</button>
        <button onClick={()=>dispatch({type : "mode", payload : "delete"})}>삭제</button>
      </div>
      {
        mode === "register" ?
        <EmployeeRegister/>
        : mode === "update" ?
        <EmployeeUpdate/>
        : <button onClick={handleDelete}>위 데이터를 삭제 하시겠습니까? </button>

      }
    </div>
  )
}

export default EmployeePage
