// EmployeeTable.jsx

import React, { useContext } from 'react'
import styled from 'styled-components';
import { EmployeeContext } from '../../no0_context/EmployeeContext';

const EmployeeTable = () => {
  const {state} = useContext(EmployeeContext);
  const {emp} = state;
  return (
    <Table>

      <tbody>

        {emp &&
          Object.entries(emp).map(([key, value]) => (
            <tr key={key}>
              <Th>{key}</Th>
              <Td>{value}</Td>
            </tr>
          ))
        }

      </tbody>

    </Table>
  )
}

export default EmployeeTable


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Th = styled.th`
  width: 140px;
  background: #e2e8f0;
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid #cbd5e1;
`

const Td = styled.td`
  padding: 14px;
  border-bottom: 1px solid #e2e8f0;
`