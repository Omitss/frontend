import React from 'react'
import RegisterFrom from '../../no2_components/user/RegisterFrom'

const RegisterPage = ({setUsers}) => {
  return (
    <>
    <RegisterFrom 
    setUsers = {setUsers}
    />      
    </>
  )
}

export default RegisterPage
