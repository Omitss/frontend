// App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'

import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
      <Layout>

        <HeaderBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <BodyContainer>

          <SiderBar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          <Content>

            <Routes>
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