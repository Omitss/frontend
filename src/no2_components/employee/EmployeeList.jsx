// EmployeeList.jsx

import React, { useContext } from 'react'
import styled from 'styled-components';
import { EmployeeContext } from '../../no0_context/EmployeeContext';

const EmployeeList = () => {
  const {state,  dispatch} = useContext(EmployeeContext);
  const {empTable, selectedId} =state;
  const handleClick = (id) => {
    dispatch({type: "select", payload: id})
  }
  return (
    <Container>
      {/* {console.log(empTable)} */}
      {
        empTable?.map(item => (
          <EmployeeButton
            key={item.id}
            $active={selectedId === item.id}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </EmployeeButton>
        ))
      }

    </Container>
  )
}

export default EmployeeList


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const EmployeeButton = styled.button`
  border: none;
  padding: 14px;
  border-radius: 10px;

  background: ${({$active}) =>
    $active ? "#3b82f6" : "#e2e8f0"};

  color: ${({$active}) =>
    $active ? "white" : "#1e293b"};

  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;

  &:hover{
    opacity: 0.85;
  }
`