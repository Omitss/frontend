import React, { useState } from 'react'

const initialState = {
    id : "", username: "", password : "", confirmPassword : ""
}

const RegisterFrom = ({setUsers}) => {
    const[user, setUser] = useState(initialState);
    const handleChage = (event) => {
        const { name, value} = event.target;
        setUser(prev => (
            {...prev, [name]:value}
        ))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(user.password !== user.confirmPassword) {
            alert("비밀번호 일치 하지 않습니다.")
            return;
        }
        setUsers(prev => (
            [...prev,
                {
                    id : user.id,
                    username : user.username,
                    password : user.password
                }
            ]
        ))
        

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>회원 등록</h2>
        <div>
            <input 
                type="text"
                name = "username"
                value={user.username}
                onChange={handleChage}
                placeholder='사용자 이름'
            />
        </div>
        <div>
            <input 
                type="password"
                name = "password"
                value={user.password}
                onChange={handleChage}
                placeholder='비밀번호'
            />
        </div>
        <div>
            <input 
                type="password"
                name = "confirmPassword"
                value={user.confirmPassword}
                onChange={handleChage}
                placeholder='비밀번호 확인'
            />
        </div>
        <button>등록</button>
      </form>
      
    </div>
  )
}

export default RegisterFrom
