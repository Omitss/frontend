//EmployeeList.jsx
import React, { useContext } from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeeList = () => {
    const{state, dispatch} = useContext(EmployeeContext)
    const {empTable, selectedID} =state;


    const handleClick = (id) => {
        
        dispatch({type : "select", payload : id})
    }

  return (
    
    <div>
      {empTable?.map(item => (
        <button onClick={()=>handleClick(item.id)}
        >
            {item.name}
        </button>
      ))}
    </div>
  )
}

export default EmployeeList
