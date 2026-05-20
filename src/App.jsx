// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'

import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'
import LoginPage from './no1_pages/user/LoginPage'
import RegisterPage from './no1_pages/user/RegisterPage'

const initialState = [
  {id:1, username : "john", password : "1111"},
  {id:2, username : "peter", password : "1111"},
  {id:3, username : "susan", password : "1111"},
  {id:4, username : "Sue", password : "1111"}
]

const initialMod = {
  isLogin : false, 
  username : ""
}
   


function App() {
  const [users, setUsers] = useState(initialState);
  const [loginMode, setLoginMode] = useState(initialMod);

  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
      {console.log(users)}
      <Layout>

        <HeaderBar
          loginMode = {loginMode}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setLoginMode = {setLoginMode}
        />

        <BodyContainer>

          <SiderBar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          <Content>

            <Routes>
              <Route path="/login" element={<LoginPage  users = {users} setLoginMode = {setLoginMode}/>} />
              <Route path="/register" element={<RegisterPage setUsers={setUsers}/>} />
              <Route path="/" element={<HomePage />} />
              <Route path="todo" element={<TodoPage />} />
              <Route path="employee" element={<EmployeePage />} />

            </Routes>

          </Content>

        </BodyContainer>

      </Layout>
    </BrowserRouter>
  )
}

export default App


const Layout = styled.div`
  min-height: 100vh;
  background-color: #f1f5f9;
`

const BodyContainer = styled.div`
  display: flex;
`

const Content = styled.main`
  flex: 1;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`