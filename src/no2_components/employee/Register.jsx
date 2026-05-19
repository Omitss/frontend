//Form태그를 만드는 것
import React, { useState } from 'react'

const initialState = {
  name : "", email : "", job : "", pay : null
}

const Register = () => {
  const[info, setInfo] = useState(initialState);

  const handleChange = () => {

  }

  const handleSubmit= () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      
      <div>
        <label>이름</label>
        <input 
        type="text" 
        name = "name"
        value={info.name}
        onChange={handleChange}
      />
      </div>
      <div>
        <label>이메일</label>
        <input 
        type="email" 
        name = "email"
        value={info.email}
        onChange={handleChange}
      />
      </div>
      <div>
        <label>직업</label>
        <input 
        type="text" 
        name = "job"
        value={info.job}
        onChange={handleChange}
      />
      </div>
      <div>
        <label>급여</label>
        <input 
        type="number" 
        name = "pay"
        value={info.pay}
        onChange={handleChange}
      />
      </div>     

      <button>생성</button>
    </form>

  )
}

export default Register
