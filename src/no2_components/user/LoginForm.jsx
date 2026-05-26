import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../../no0_context/UserContext'

const initialState = {
    username: "",
    password: ""
}

const LoginForm = () => {
    const {state, dispatch} = useContext(UserContext);   
    const {users} = state


    const [user, setUser] = useState(initialState)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target

        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const loginUser = users.find(item =>
            item.username === user.username &&
            item.password === user.password
        )

        if (loginUser) {

            alert("로그인 성공")

            dispatch({type:"login", payload : loginUser})

            navigate("/")

        } else {
            alert("사용자가 아닙니다")
        }
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Card>

                <Title>로그인</Title>

                <Input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="사용자 이름"
                />

                <Input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                />

                <LoginButton type="submit">
                    로그인
                </LoginButton>

                <RegisterButton
                    type="button"
                    onClick={() => navigate("/register")}
                >
                    아직 회원이 아닌가요? 회원가입
                </RegisterButton>

            </Card>

        </Form>
    )
}

export default LoginForm


// ================= CSS =================

const Form = styled.form`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #f1f5f9;
`

const Card = styled.div`
    width: 100%;
    max-width: 420px;

    background: white;

    padding: 48px 40px;

    border-radius: 20px;

    box-shadow: 0 10px 30px rgba(0,0,0,0.08);

    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    text-align: center;

    margin-bottom: 32px;

    color: #0f172a;

    font-size: 30px;
    font-weight: 700;
`

const Input = styled.input`
    width: 100%;

    padding: 14px 16px;

    margin-bottom: 16px;

    border: 1px solid #dbe4ee;

    border-radius: 10px;

    font-size: 16px;

    outline: none;

    transition: 0.2s;

    box-sizing: border-box;

    &:focus {
        border-color: #3b82f6;

        box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
    }
`

const BaseButton = styled.button`
    width: 100%;

    border: none;

    padding: 14px;

    border-radius: 10px;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    transition: 0.2s;
`

const LoginButton = styled(BaseButton)`
    background: #3b82f6;

    color: white;

    margin-top: 8px;

    &:hover {
        background: #2563eb;
    }
`

const RegisterButton = styled(BaseButton)`
    background: transparent;

    color: #3b82f6;

    margin-top: 12px;

    &:hover {
        background: #eff6ff;
    }
`