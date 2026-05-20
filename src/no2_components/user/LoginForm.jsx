import React, { useState } from 'react'

const initialState = {
    username : "", password : ""
}

const LoginForm = ({users, setLoginMode}) => {
    const[user, setUser] = useState(initialState);
    
    const handleChange = (event) => {
        const{name, value} = event.target;
        setUser(prev => (
            {...prev, [name]:value}
        ))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const loginUser = users.filter(item=>(
            item.username === user.username && item.password === user.password
        ))[0] //오브젝트 하나를 추출함
        if(loginUser){
            alert("성공")
            setLoginMode(prev => (
                {...prev, isLogin : true, username: loginUser.username}
            ))
        }else{
            alert("사용자가 아닙니다")
        }
    }

  return (
    <>
      <form  onSubmit = {handleSubmit}>
        <h2>로그인</h2>
        <div>
            <input
                type = "text"
                name = "username"
                value= {user.username}
                onChange={handleChange}
                placeholder = "사용자 이름"
            />
        </div>
        <div>
            <input
                type = "password"
                name = "password"
                value= {user.password}
                onChange={handleChange}
                placeholder = "비밀번호"
            />
        </div>
        <div>
            <button>클릭</button>            
        </div>
        
      </form >
    </>
  )
}

export default LoginForm
