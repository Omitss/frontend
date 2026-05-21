import React from 'react'

const EmployeeTable = ({state}) => {
  const {emp} = state;
  return (
    <>
      <table>
        <tr>
          {emp && Object.keys(emp).map(key =>( // emp라는 데이터가 들어오면 실행해라 
            <th>{key}</th>
          ))}
        </tr>
        <tr>
          {emp && Object.values(emp).map(value =>(
            <td>{value}</td>
          ))}
        </tr>  
      </table>  
    </>
  )
}

export default EmployeeTable
