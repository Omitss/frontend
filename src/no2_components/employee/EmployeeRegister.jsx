// EmployeeRegister.jsx
import React, { useState } from 'react'

const initialEmps = [
  {id:"1", name:"John", email:"John@example.com", job : "forentdend", pay : 600},
  {id:"2", name:"peter", email:"peter@example.com", job : "backend", pay : 600},
  {id:"3", name:"Susan", email:"Susan@example.com", job : "db", pay : 600},
  {id:"4", name:"Sue", email:"Sue@example.com", job : "ai", pay : 600},
]
const initialEmp = {
  id : '', name : '', email:'', job: "", pay :""
}

const initialstate = {
  empTable : initialEmps,
  emp : initialEmp
}


const EmployeeRegister = ({dispatch}) => {
  const [emp, setEmp] = useState(initialEmp);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setEmp(prev => (
      {...prev, [name]:value}
    ))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newId = Date.now().toString();

    dispatch({type : "register", payload: {newId, emp}})

    // emp && 
    // setState(prev => (
    //   {
    //     ...prev,
    //     empTable : [
    //       ...prev.empTable,
    //       {...emp, id : Date.now()}
    //     ]
    //   }
    // ))
    // setState(prev => ({
    //   ...prev, 
    //   selectedID : prev.empTable[prev.empTable.length - 1].id
    // }))
    
    setEmp(initialEmp)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름</label>
          <input 
            type="text"
            name = "name"
            value={emp.name}
            onChange={handleChange}
            placeholder='이름'
          />
        </div>
        <div>
          <label>이메일</label>
          <input 
            type="email"
            name = "email"
            value={emp.email}
            onChange={handleChange}
            placeholder='이메일'
          />
        </div>
        <div>
          <label>직업</label>
          <input 
            type="text"
            name = "job"
            value={emp.job}
            onChange={handleChange}
            placeholder='직업'
          />
        </div>
        <div>
          <label>급여</label>
          <input 
            type="number"
            name = "pay"
            value={emp.pay}
            onChange={handleChange}
            placeholder='급여'
          />
        </div>
        <button>클릭</button>
      </form> 
    </>
  )
}

export default EmployeeRegister
