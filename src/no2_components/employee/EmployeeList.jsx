//EmployeeList.jsx
import React from 'react'

const EmployeeList = ({state, dispatch}) => {
    const {empTable} = state; // state에서 필요한 값인 empTable만 가져오겠다.
    const handleClick = (id) => {
        console.log("id : ", id)
        dispatch({type : "select", payload : id})
        // setState(prev => (            
        //     {...prev, selectedID: id}
        // ))
    }

  return (
    <div>
      {empTable.map(item => (
        <button onClick={()=>handleClick(item.id)}
        >
            {item.name}
        </button>
      ))}
    </div>
  )
}

export default EmployeeList
