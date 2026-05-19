import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom' // {BrowserRouter}가 오브젝트로 부른다.
import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'
import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderBar/>
        <div>
          <SiderBar/>
        </div>
        <div>
          <Routes>
            <Route path = "/" element = {<HomePage/>}/> {/* 페이지 만들때는 <Route/>로 */} {/* path = "/" / 의미? =  첫페이지 */}
            <Route path = "todo" element = {<TodoPage/>} />
            <Route path = "employee" element = {<EmployeePage/>} />
          </Routes>
        </div>
        
      </BrowserRouter>
   </>
  )
}

export default App
